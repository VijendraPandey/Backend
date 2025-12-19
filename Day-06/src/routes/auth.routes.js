const express = require("express");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require('../middleware/auth.middleware')

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const hasUser = await userModel.findOne({ username });

  if (hasUser) {
    return res.status(409).json({
      message: "User already exists!",
    });
  }

  const hasdhedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    password: hasdhedPassword,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict"
  });

  res.status(201).json({
    message: "User registered successfully"
  })
});

router.post("/login", async (req, res) => {
    const {username, password} = req.body;

    const user = await userModel.findOne({username});

    if(!user){
        return res.status(401).json({
            message: "Invalid Credentials!"
        })
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return res.status(401).json({
            message: "Invalid Credentials!"
        })
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict"
    });

    res.status(200).json({
        message: "Logged In Successfully!"
    })

})

router.get("/user", auth, async (req, res) => {
    const user = await userModel.findById(req.userId).select("-password");

    res.json({user});
})

router.get('/logout', (req, res) => {
    res.clearCookie("token");
    res.json({
        message: "Logout Successfully!"
    })
})

module.exports = router;
