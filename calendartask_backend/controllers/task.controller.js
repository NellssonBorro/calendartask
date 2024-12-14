import {db} from '../libs/dbConnect.js';
import { ObjectId, ReturnDocument } from 'mongodb';

const collection = await db.collection('users'); 

export const getMyTasks = async (req, res, next) =>{ 
    try{
        const query = {owner:  ObjectId(req.params.id)};
        const tasks = await collection.find(query);//.toArray();

        if(!tasks){
            return next({status: 404, message: ' User  not found'});
        }
        res.status(200).json(tasks); 
    }catch(error){
        next({status: 500, error});
    }
}

export const getMyInvites = async (req, res) =>{
    try{
        const query = {
            invitees:  ObjectId(req.params.id),
            _id:  ObjectId(req.params.id),
        };
        const tasks = await collection.findAll(query).toArray();

        if(!tasks){
            return next({status: 404, message: ' User  not found'});
        }
        res.status(200).json(tasks);
    }catch(error){
        next({status: 500, error});
    }
}