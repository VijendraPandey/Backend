const mongoose = require('mongoose');

const connectToDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to MongoDB');
};

module.exports = connectToDB;