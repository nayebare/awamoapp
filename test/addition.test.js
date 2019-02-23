
const chai = require('chai').expect;
var chaiHttp = require('chai-http')

const addController = require('../controllers/addController.js');
var assert = require('assert');

describe('/Addition', () => {
  it('Should expect number to be above zero', (done) => {
    addController.getSum(function (err, result) {
      chaiHttp.end((err, res) => {
        res.body.error.should.eql('sent empty paramenters');
        done();
    });
  });
  });
});
