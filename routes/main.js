__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})
router.get('/views', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

module.exports = router
