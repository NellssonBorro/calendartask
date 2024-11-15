import express from 'express';
import 'dotenv/config';
import userRouter from './routes/user.route.js';
import { errorHandler } from './libs/middleware.js';
 
const app = express();
const PORT = 8000;

app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('*', (req, res) => {
    res.status(404).json({message: 'Not Found!'});
});
app.use(errorHandler);


//start the express server
app.listen(PORT, () => { 
    console.log(`Server listening on port ${PORT}`);
});  