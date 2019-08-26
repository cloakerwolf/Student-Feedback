const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// Get all feedback
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "feedback" ORDER BY "id";';
    pool.query(queryText).then(result => {
        // Sends back the results in an object
        res.send(result.rows);
    })
        .catch(error => {
            console.log('error getting feedback', error);
            res.sendStatus(500);
        });
});


//Post a new feedback

router.post('/',  (req,res) =>{
    let newfeedback = req.body;
    console.log('adding feedbacck', newfeedback);

    let queryText = 
        `INSERT INTO "feedback" (feeling, understanding, support, comments)
         VALUES ($1, $2, $3, $4);`;
         pool.query(queryText, [newfeedback.feeling, newfeedback.understanding, newfeedback.support, newfeedback.comments])
            .then(results => {
                res.sendStatus(201);
            })
            .catch( error => {
                console.log('error adding newfeedback', error);
                res.sendStatus(500);
                
            })
    
})



module.exports = router;