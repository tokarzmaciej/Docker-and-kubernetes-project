const express = require('express');
const router = express.Router();
const clientRedis = require('../config/redisClient');


router.get('/', async (req, res) => {
    try {
        const find = await clientRedis.smembers(`actions`);
        return res.send({ allActions: find });
    } catch (error) {
        return res.send('error' + error);
    }
});


router.post('/', async (req, res) => {
    try {
        const action = req.body.action;
        await clientRedis.sadd(`actions`, action);
        res.send({ newAction: action })
    } catch (error) {
        return res.send('error' + error);
    }
});

module.exports = router;