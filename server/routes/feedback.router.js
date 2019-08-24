const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// Get all feedback
router.get('/', (req, res) => {
    let queryText = 'SELECT title, author FROM "feedback" ORDER BY "id";';
    pool.query(queryText).then(result => {
        // Sends back the results in an object
        res.send(result.rows);
    })
        .catch(error => {
            console.log('error getting books', error);
            res.sendStatus(500);
        });
});



module.exports = router;