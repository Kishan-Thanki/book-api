const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async = () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        await = mongoose.connect(mongoURI, {
            // useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connected to MongoDB Atlas');
    }
    catch (error) {
        console.error('Error connecting to MongoDB: ', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;