const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

// Get all gifts (/api/gifts)
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const gifts = await collection.find({}).toArray();
        res.json(gifts);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// Get gift by ID (/api/gifts/:id)
router.get('/:id', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const gift = await collection.findOne({ _id: req.params.id });
        if (!gift) {
            return res.status(404).send("Gift not found");
        }
        res.json(gift);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

module.exports = router;
