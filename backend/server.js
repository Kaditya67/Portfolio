const express = require('express');
const cors = require('cors');
const app = express();
const connectToDatabase = require('./db');

// env
const dotenv = require('dotenv');
dotenv.config();

// Middlewares
const corsOptions = {
    origin: "*", // Use "*" for all origins or specify your frontend URL here
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials:true
};
console.log("Server file running")
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
