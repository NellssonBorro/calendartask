import express from 'express';

import {
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    checkme,
} from '../controllers/user.controller.js';

const userRouter = express.Router();
userRouter.get('/all', getUsers);
userRouter.get('/checkme', checkme);
userRouter.get('/:id', getUser);
userRouter.patch('/update/:id', updateUser);
userRouter.delete('/delete/:id', deleteUser);

export default userRouter;
