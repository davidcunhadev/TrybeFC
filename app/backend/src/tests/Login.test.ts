import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app'
import SequelizeUser from '../database/models/SequelizeUser';
import { token, user, validBodyLogin } from './Mocks/User.mock'
import * as JWT from 'jsonwebtoken'

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests in /login route', function() {
  afterEach(sinon.restore);

  it('Should login with success', async function() {
    const userSimulated = SequelizeUser.build(user)
    sinon.stub(SequelizeUser, 'findOne').resolves(userSimulated)
    sinon.stub(JWT, 'sign').resolves(token)

    const {status, body} = await chai.request(app).post('/login').send(validBodyLogin)

    expect(status).to.be.deep.equal(200);
    expect(body).to.have.key('token');
  })

  it('Should not login without email', async function() {
    sinon.stub(JWT, 'sign').resolves(token)

    const {status, body} = await chai.request(app).post('/login').send({password: 'secret_admin'})

    expect(status).to.be.deep.equal(400);
    expect(body).to.have.key('message');
    expect(body).to.be.deep.equal({message: 'All fields must be filled'})
  })

  it('Should not login without password', async function() {
    sinon.stub(JWT, 'sign').resolves(token)

    const {status, body} = await chai.request(app).post('/login').send({email: 'admin@admin.com'})

    expect(status).to.be.deep.equal(400);
    expect(body).to.have.key('message');
    expect(body).to.be.deep.equal({message: 'All fields must be filled'})
  })

  it('Should not login with invalid body', async function() {
    sinon.stub(JWT, 'sign').resolves(token)

    const {status, body} = await chai.request(app).post('/login').send({email: 'admin@admin.com', password: 'xablau123'})

    expect(status).to.be.deep.equal(401);
    expect(body).to.have.key('message');
    expect(body).to.be.deep.equal({message: 'Invalid email or password'})
  })
})