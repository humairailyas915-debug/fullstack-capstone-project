const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    const db = await connectToDatabase();
    const collection = db.collection("users");
    const newUser = req.body;
    await collection.insertOne(newUser);
    res.status(201).json({ message: "User registered successfully" });
});

router.post('/login', async (req, res) => {
    const db = await connectToDatabase();
    const collection = db.collection("users");
    const user = await collection.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ error: "User not found" });
    
    const token = jwt.sign({ email: user.email }, 'secretKey');
    res.json({ token, email: user.email });
});

router.put('/update', async (req, res) => {
    const db = await connectToDatabase();
    const collection = db.collection("users");
    await collection.updateOne({ email: req.body.email }, { $set: req.body });
    res.json({ message: "User updated successfully" });
});

module.exports = router;
