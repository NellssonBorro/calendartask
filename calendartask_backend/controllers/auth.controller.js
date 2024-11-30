import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { db } from '../libs/dbConnect.js'

let collection
(async () => {
    collection = await db.collection('users')
})()


export const checkup = async (req, res, next) => {
    res.status(200).json({result: "Fail", Verdict: "Repeat"});
}

export const signup = async (req, res, next) => {

    try {
        //get post  params from request
        const { username, email, password } = req.body
        //create a query to check if this username or email already exists
        const query = {
            $or: [{ email }, { username }],
        };
        const existingUser = await collection.findOne(query)
        if (existingUser) {
            return next({
                status: 422,
                message: 'Email or Username is already registered.',
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        //create the user
        const user = {
            username,
            email,
            password: hashedPassword,
            avatar: 'https://g.codewithnathan.com/default-user.png',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        //insert this new user into the db
        const { insertedId } = await collection.insertOne(user)
        //generate JWT token
        const token = jwt.sign({ id: insertedId }, process.env.AUTH_SECRET)
        //prepare the response object
        user._id = insertedId
        const { password: pass, updatedAt, createdAt, ...rest } = user;
        res.cookie('taskytrack_token', token, { httpOnly: true })
            .status(200).json(rest);
    } catch (error) {
        next({ status: 500, error });
    }
}