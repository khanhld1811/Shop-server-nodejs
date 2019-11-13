var express = require('express');
var multer = require('multer');

var controller = require('../controller/user.controller');
var validate = require('../validate/user.validate');

var upload = multer({ dest : './public/uploads/' });

var router = express.Router();


// Render file html users/index.pug
router.get('/', controller.index);

router.get('/cookie',function(req, res, next){
    res.cookie('user-id',12345);
    res.send('Hello');
});

// Search users
router.get('/search', controller.search);

// render file html create.pug
router.get('/create', controller.create);

router.get('/:id',controller.get);

//post users
router.post('/create',upload.single('avatar'),
                        validate.postCreate,
                        controller.postCreate);

module.exports = router;