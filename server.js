require('dotenv').config();

const express = require('express');
const dbConfig = require('./dbConfig');

const app = express();
const port = process.env.PORT || 5000;

const portfolioRoute = require('./routes/portfolioRoute');
app.use(express.json());

app.use('/api/portfolio', portfolioRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

