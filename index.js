import express from 'express';
import mongoose from 'mongoose';
import productRoute from './routes/product.route.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoute);

// Database connection
mongoose.connect("mongodb+srv://crudadmin:crudadmin123@backenddb.spzubmj.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendDb")
    .then(() => {
        console.log('Connected to database');
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch((err) => {
        console.error('Connection error', err);
    });
