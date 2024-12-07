import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { db } from '../libs/dbConnect.js'

let collection
(async () => {
    collection = await db.collection('users')
})()


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
        //send the response object
        res.status(200);
    } catch (error) {
        next({ status: 500, error });
    }
}

export const signin = async (req, res, next) => {
    const {email, password} = req.body
    try{
        const validUser = await collection.findOne({email})
        if(!validUser){
            return next({status:404, message: 'User not found!'})
        } 
        const validPassword = await bcrypt.compare(password, validUser.password)
        if(!validPassword){
            return next({status: 401, message: 'Wrong password!'})
        }
        const token = jwt.sign({id: validUser._id}, process.env.AUTH_SECRET)
        const { password: pass, updatedAt, createdAt, ...rest } = validUser;
        res.cookie('taskytrack_user', token, { httpOnly: true })
            .status(200).json(rest);
    }catch(error){
        next({status: 500, error})
    }
}

export const signout = async (req, res, next) => {
    try{
        res.clearCookie('taskytrack_user')
        res.status(200).json({message: 'Signed out successful'})
    }catch(error){
        next({status: 500})
    }
}