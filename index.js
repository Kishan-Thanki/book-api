const express = require('express');
const connectDB = require('./src/utils/database');
const app = express();

require('dotenv').config();

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Book API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});