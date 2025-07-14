const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Function to generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "2h", // token is valid for 2 hours
  });
};

// 📝 Signup Route
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email already registered" });
    }

    // Create new user
    const newUser = await User.create({ name, email, password });

    // Return success response with token
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token: generateToken(newUser._id),
    });
  } catch (err) {
    res.status(500).json({ msg: "Signup failed", error: err.message });
  }
});

// 📝 Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ msg: "Wrong password" });

    // Return success response with token
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ msg: "Login failed", error: err.message });
  }
});

module.exports = router;
