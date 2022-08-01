let app =  require('../app/app');
let chai = require('chai');
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
describe('Integration Test', () => {
    describe('Index Page', () => {
        it("It should return Status Code 200", (done) => {
            chai.request(app)
            .get("/")
            .end((error, response) => {
                response.should.have.status(200);
                done();
            });
        });

        it("It should display the current time", (done) => {
            chai.request(app)
            .get("/")
            .end((error, response) => {
                response.text.should.be.eq(new Date(Date.now()).toLocaleString())
                done();
            });

        });
    });
});