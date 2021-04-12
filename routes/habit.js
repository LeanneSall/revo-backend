const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send('make habit')
});

router.get('/', (req, res) => {
    res.send('make habit')
});

router.put('/:id', (req, res) => {
    res.send('make habit')
});

router.delete('/:id', (req, res) => {
    res.send('make habit')
});


module.exports = router;