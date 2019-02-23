const chai= require('chai');
const chaiHttp = require('chai-http');
const addController = require('../controllers/addController.js');

chai.should();
chai.use(chaiHttp);
describe('Test for Request API endpoints', () => {
    var newadd = new addController();
     addController();
});
