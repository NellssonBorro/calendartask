import express from 'express';
import 'dotenv/config';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import taskRouter from './routes/task.route.js';
import { errorHandler } from './libs/middleware.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

 
const app = express();
const PORT = 8000;

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST'],
    credentials: true,
}));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/checker', authRouter);
app.use('*', (req, res) => {
    res.status(404).json({message: 'Not Found!'});
});
app.use(errorHandler);


//start the express server
app.listen(PORT, () => { 
    console.log(`Server listening on port ${PORT}`);
});  