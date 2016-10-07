var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
    res.send(200)
});

module.exports = router
