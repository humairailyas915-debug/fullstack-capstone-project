const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

// Search gifts by category or query
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        let query = {};
        
        // Filter based on category if provided in query params
        if (req.query.category) {
            query.category = req.query.category;
        }

        const gifts = await collection.find(query).toArray();
        res.json(gifts);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

module.exports = router;
