const userModel = require("../models/user.model");
const generateCaption = require('../services/ai.service')
const uploadImageToImageKit = require('../services/storage.service')
const postModel = require('../models/post.model');

const createPostController = async (req, res) => {
  try {
    const file = req.file;
    const caption = await generateCaption(file);
    const imageData = await uploadImageToImageKit(file);
    
    const post = await postModel.create({
        imageUrl: imageData.url,
        caption,
        user: req.userId
    })

    res.status(201).json({
        message: "Post created successfully!",
        post
    })
    
  } catch (err) {}
};

module.exports = { createPostController };
