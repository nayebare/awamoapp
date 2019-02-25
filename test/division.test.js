//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
var app = require('../app');
const assert = require('assertthat');
var expect = chai.expect;

chai.should();
chai.use(chaiHttp);

describe('/POST Division', () => {
  it('it should  test for three paramenters', (done) => {
   chai.request('http://localhost:8000')
      .post('/api/div/')
      .send({
        opd1:4, opd2:3, opn:'div'
      })
      .end((err, res) => {
       expect(res).to.have.status(200);
       done();
      });
  });
});



