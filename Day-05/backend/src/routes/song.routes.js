const express = require('express');
const multer = require('multer');
const uploadAudioToImageKit = require('../service/storage.service');
const songModel = require('../models/song.model');
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const detectSongMood = async (title, artist) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Analyze the mood or emotional theme of this song.
    Title: ${title}
    Artist: ${artist}

    Respond with ONLY ONE mood from this list:
    happy, sad, angry, neutral, surprised, fearful.`,
  });
  return response.text;
}

router.get('/', async (req, res) => {
    const songs = await songModel.find();

    res.status(200).json({
        message: 'All Songs fetched successfully',
        songs: songs
    })
})

router.get('/songs', async (req, res) => {
    const mood = req.query.mood;

    const songs = await songModel.find({
        mood: mood
    })

    res.status(200).json({
        message: 'Songs fetched successfully',
        songs: songs
    })
})

router.post('/songs', upload.single("audio"), async (req, res) =>{
    const fileData = await uploadAudioToImageKit(req.file);

    const mood = await detectSongMood(req.body.title, req.body.artist);
    
    const song = await songModel.create({
        title: req.body.title,
        artist: req.body.artist,
        mood: mood,
        audio: fileData.url
    })
    
    res.status(201).json({
        message: 'Song created successfully',
        song: song
    })
})

module.exports = router;