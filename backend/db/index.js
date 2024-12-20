const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/user.models.js'); 

dotenv.config();

const connectToDatabase = async () => {
  try { 
    const connection = await mongoose.connect(`${process.env.MONGO_URI}/Portfolio`);
    console.log("Connected to MongoDB successfully!", connection.connection.name, connection.connection.host);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);   
  }
};

// const createUser = async () => {
//   try {
//     const newUser = new User({
//       email: 'user',
//       password: 'password',  
//     });
 
//     await newUser.save();
//     console.log('User created successfully:', newUser);  
//   } catch (error) {
//     console.error('Error creating user:', error.message);
//   }
// };
 
// console.log("Attempting to connect to the database and create user...");
// createUser();

module.exports = connectToDatabase;
