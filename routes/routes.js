let express = require('express');
let router = express.Router();
// const controller = require('../controllers/controller.js');

router.get('/', function(req, res, next)
{
    res.render('index.ejs');
})


module.exports = router;