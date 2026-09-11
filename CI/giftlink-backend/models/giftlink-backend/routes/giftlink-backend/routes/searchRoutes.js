const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        let query = {};
        
        if (req.query.category) {
            query.category = req.query.category;
        }
        if (req.query.condition) {
            query.condition = req.query.condition;
        }
        
        const gifts = await collection.find(query).toArray();
        res.json(gifts);
    } catch (e) {
        res.status(500).send("Error searching gifts");
    }
});

module.exports = router;
