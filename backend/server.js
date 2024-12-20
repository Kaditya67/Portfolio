const express = require('express');
const app = express();
const connectToDatabase = require('./db');

// env
const dotenv = require('dotenv');
dotenv.config();

// Middlewares
app.use(express.json());
 
// imports
const userRoutes = require('./routes/user.routes.js');

//routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectToDatabase();
    console.log(`Server running on port ${PORT}`);
});
