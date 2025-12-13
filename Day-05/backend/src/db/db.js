const mongoose = require('mongoose');

const connectToDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to the database');
};

module.exports = connectToDB;