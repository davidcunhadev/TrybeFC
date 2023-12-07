import * as sinon from 'sinon';
import * as chai from 'chai';
import {Response} from 'superagent'

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app'


chai.use(chaiHttp);


const { expect } = chai;

describe('Tests in /leaderboard/home route and in /leaderboard/away route', function() {
  let res: Response
  
  it("Should return all teams from /home", async function() {

     res = await chai.request(app).get('/leaderboard/home')
     const {status} = res
  
    expect(status).to.be.deep.equal(200)
  })

  it("Should return all teams from /away", async function() {

    res = await chai.request(app).get('/leaderboard/away')
    const {status} = res
 
   expect(status).to.be.deep.equal(200)
 })
})