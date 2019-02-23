var  request =  require('https');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

  describe('/POST Addition', () => {
      it('it should post Addition', (done) => {
        chai.request('http://localhost:8000')
            .post('/add/')
            .send({
              opd1: 4, opd2: 3
             })
            .end((err, res) => {
              res.should.have.status(200);
              done();
            });
      });
  });

