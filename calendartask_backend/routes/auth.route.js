import express from 'express'
import {
    signup,
    checkup,
} from '../controllers/auth.controller.js'


const authRouter = express.Router();
authRouter.post('/signup',signup)
authRouter.get('/checkup',checkup)
export default authRouter;