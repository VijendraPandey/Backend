const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    audio: String,
    mood: String,
});

const songModel = mongoose.model('Songs', songSchema);

module.exports = songModel;