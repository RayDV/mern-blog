import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO_DB_URI)
.then(() => {
    console.log('Connected to MongoDB!');
})
.catch((err) => {
    console.log(err);
});

const app = express();

// By default we are not allowed to send JSON, so we need to add the following:
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!!!');
});

// req: data we are sent to the API
// res: data that we have recieved from the API
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});