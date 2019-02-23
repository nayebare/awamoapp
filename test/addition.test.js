import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
const addController = require('./controllers/addController.js');

chai.should();
chai.use(chaiHttp);

describe('/addition', () => {
  it('Should expect number to be above zero', (done) => {
    addController.getSum(function (err, result) {
      expect(result).to.have.lengthOf.above(0)
      done();
    });
  });

});


