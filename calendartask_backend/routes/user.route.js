import express from 'express';

import {
    getUsers,
    getUser,
    updateUser,
    deleteUser,
} from '../controllers/user.controller.js';

const router = express.Router();
router.get('/all', getUsers);
router.get('/:id', getUser);
router.patch('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;
