const express = require('express');
const router = express.Router();
const Bugs = require('../models/bugs');

// Return all bugs
router.get('/bugs', (req, res, next) => {

    Bugs.find({})
        .then((data) => res.json(data))
        .catch(next);

});


module.exports = router;
