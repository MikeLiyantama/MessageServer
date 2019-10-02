/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
/**
 * Sample Unit testing for API
 */

process.env.NODE_ENV = 'test';

let socket = require('socket.io-client')('http://localhost:3000');
let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
let server = require('../src/server');

let Cache = require('../src/util/cache');

var cache = new Cache();

chai.use(chaiHttp);

// eslint-disable-next-line no-unused-vars

//Init socket.io client for message tracking
socket.on('message', message => {
    cache.addElem(message);
});

describe('/Routers', () => {
    after(() => {
        server.server.close();
    });
    describe('/GET Messages', () => {
        it('Endpoint exists', done => {
            chai.request(server)
                .get('/messages')
                .end((req, res) => {
                    expect(res.status).to.be.eql(200);
                });
            done();
        });
        it('Able to get messages', done => {
            chai.request(server)
                .get('/messages')
                .end((req, res) => {
                    expect(res.status).to.be.eql(200);
                    expect(res.body.messages).to.be.an.instanceof(Array);
                });
            done();
        });
    });

    describe('/POST Messages', () => {
        it('Endpoint exists', done => {
            chai.request(server)
                .post('/message')
                .set('Content-Type', 'application/json')
                .send({ message: '1' })
                .end((req, res) => {
                    expect(res.status).to.be.eql(200);
                });
            done();
        });
        it('Messages successfully stored in database / cache', done => {
            chai.request(server)
                .post('/message')
                .set('Content-Type', 'application/json')
                .send({ message: '2' })
                .end((req, res) => {
                    expect(res.status).to.be.eql(200);
                });

            chai.request(server)
                .post('/message')
                .set('Content-Type', 'application/json')
                .send({ message: '3' })
                .end((req, res) => {
                    expect(res.status).to.be.eql(200);
                });

            chai.request(server)
                .get('/messages')
                .end((req, res) => {
                    expect(res.status).to.be.eql(200);
                    expect(res.body.messages).to.be.an.instanceof(Array);
                    expect(res.body.messages).to.be.eql(['1', '2', '3']);
                });
            done();
        });
    });

    describe('Socket.io Test', () => {
        it('Received all broadcasted messages', done => {
            expect(cache.getElems()).to.be.eql(['1', '2', '3']);
            done();
        });
    });
});
