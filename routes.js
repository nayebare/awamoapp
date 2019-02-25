// routes file for the api.. all routes are defined here

const thisApp = require('./app.js');
var jwt = require('jsonwebtoken');
//var jwt = require('express-jwt');
var express = require('express');
var app = express();
app.use(express.json());
app.set('view engine', 'ejs');
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
var router = express.Router();
const http = require('http');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
const urlencoded = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
var routes = require('./routes.js');
var data = {};
const addController = require('./controllers/addController.js');
const subController = require('./controllers/subController.js');
const divController = require('./controllers/divController.js');
const mulController = require('./controllers/mulController.js');

const userVerification = require('./middleware/verifyToken.js');

//for the index route of our api
//will translate this to swagger
router.get('/', function (req, res) { res.render('index'); });

router.route('/api/add/')
    .post(addController.getSum);

router.route('/api/sub/')
    .post(subController.getSub);

router.route('/api/mul/')
    .post(mulController.getMul);

router.route('/api/div/')
    .post(mulController.getMul);

module.exports = router;