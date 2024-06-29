require('dotenv').config();

const express = require('express');
const dbConfig = require('./dbConfig');

const app = express();
const port = process.env.PORT || 5000;

const portfolioRoute = require('./routes/portfolioRoute');
app.use(express.json());    // Middleware to parse JSON payloads


app.use('/api/portfolio', portfolioRoute);  // Actual route of the portfolio

app.listen(port, () => {    // Starts the server with that port
  console.log(`Server is running on port ${port}`);
});