const express = require('express');
const cors = require('cors');
const app = express();
const connectToDatabase = require('./db');

// env
const dotenv = require('dotenv');
dotenv.config();

// Middlewares
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'https://portfolio-4r81.vercel.app',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
console.log(process.env.FRONTEND_URL)
app.use(express.json());

// imports
const userRoutes = require('./routes/user.routes.js');
const projectRoute = require('./routes/projects.routes.js');
const experienceRoute = require('./routes/experiences.routes.js');

//routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoute);
app.use('/api/experiences', experienceRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectToDatabase();
    console.log(`Server running on port ${PORT}`);
});