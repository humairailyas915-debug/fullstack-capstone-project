const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

router.post('/login', async (req, res) => {
    const { email } = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("users");
    const user = await collection.findOne({ email: email });
    res.json(user);
});

module.exports = router;
