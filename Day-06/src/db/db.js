const mongoose = require('mongoose');

const connectToDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB Atlas Database");
};

module.exports = connectToDB;