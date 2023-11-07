const express = require('express')
const router = express.Router();
const fs = require('fs');

router.get('/api/notes', async (req,res) => {
    const db_json = await JSON.parse(fs.readFileSync('db/db.json','utf8'));
    res.json(db_json)
})

router.post('/api/notes',(req,res) => {
    const db_json = JSON.parse(fs.readFileSync('db/db.json','utf8'));
    const feedBack = {
        title: req.body.title,
        text: req.body.text,
    };
    db_json.push(feedBack);
    fs.writeFileSync('db/db.json',JSON.stringify(db_json));
    res.json(db_json);
});


module.exports = router;