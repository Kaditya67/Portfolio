const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl);

const connection = mongoose.connection;

connection.on('error', () => {
  console.log('MongoDB connection error');
});
connection.on('connected', () => {
  console.log('MongoDB connected successfully');
})

module.exports = connection;