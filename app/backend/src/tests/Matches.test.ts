import * as sinon from 'sinon';
import * as chai from 'chai';
import {Response} from 'superagent'

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app'


chai.use(chaiHttp);


const { expect } = chai;

describe('Tests in /matches route', function() {
  let res: Response

  let userToken: string;


  it('Should login with success', async () => {
    res = await chai.request(app).post('/login').send({email: "user@user.com",password: "secret_user"})
    const { token } = res.body;
    userToken = token

  })
  
  it("Should return all matches", async function() {

     res = await chai.request(app).get('/matches')
     const {status} = res
  
    expect(status).to.be.deep.equal(200)
  })

  it("Should create new match", async function() {

    res = await chai.request(app).post('/matches').set('authorization', `Bearer ${userToken}`).send({
      homeTeamId: 7,
      awayTeamId: 11,
      homeTeamGoals: 3,
      awayTeamGoals: 0})
    const {status} = res
 
   expect(status).to.be.deep.equal(201)
 })
})