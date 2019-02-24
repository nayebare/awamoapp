/***
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
        expect(res).to.not.equal(200)
        done();
      });
  });
});
*/
var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:8000");
describe("SAMPLE unit test", function () {
  // #1 should return home page
  it("should return home page", function (done) {
    server
      .get("/")
      .expect("Content-type", /json/)
      .expect(208) // THis is HTTP response
      .end(function (err, res) {
        done();
      });
  });

});

