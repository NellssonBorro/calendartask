import express from 'express';

import {
    getMyTasks,
    getMyInvites,
} from '../controllers/task.controller.js';

const taskRouter = express.Router();
taskRouter.get('/all/:id', getMyTasks);
taskRouter.get('/invites', getMyInvites);
// taskRouter.put('/create', createTask);
// taskRouter.patch('/update/:id', updateTask);
// taskRouter.delete('/delete/:id', deleteTask);

export default taskRouter;
