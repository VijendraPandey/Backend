const mongoose = require('mongoose');

const connectToDB = async () => {
    await mongoose.connect('mongodb+srv://Vijendra:rsefTaCA1LuSsemB@cluster002.am7judj.mongodb.net/Backend')
    console.log('Connected to MongoDB');
}

module.exports = connectToDB