import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app'
import SequelizeTeam from '../database/models/SequelizeTeam';
import { team, teams} from './Mocks/Team.mock';

chai.use(chaiHttp);


const { expect } = chai;

describe('Tests in /teams route', function() {
  afterEach(sinon.restore);
  
  it("Should return all teams", async function() {
    sinon.stub(SequelizeTeam, 'findAll').resolves(teams as any)

    const {status, body} = await chai.request(app).get('/teams')
  
    expect(status).to.be.deep.equal(200)
    expect(body).to.be.deep.equal(teams)
  })

  it("Should return a team by ID", async function() {
    sinon.stub(SequelizeTeam, 'findOne').resolves(team as any)

    const {status, body} = await chai.request(app).get('/teams/1')
  
    expect(status).to.be.deep.equal(200)
    expect(body).to.be.deep.equal(team)
  })

  it('Should return not found if the team doesn\'t exists', async function() {
    sinon.stub(SequelizeTeam, 'findOne').resolves(null);

    const { status, body } = await chai.request(app).get('/teams/70');

    expect(status).to.deep.equal(404);
    expect(body.message).to.deep.equal('Team 70 not found');
  });

  it('Should create a team', async function() {
    sinon.stub(SequelizeTeam, 'create').resolves(team as any);

    const { id, ...sendData } = team;

    const { status, body } = await chai.request(app).post('/teams')
      .send(sendData);

    expect(status).to.equal(201);
    expect(body).to.deep.equal(team);
  });

  it('Should update a team', async function () {
    sinon.stub(SequelizeTeam, 'update').resolves([1] as any);
    sinon.stub(SequelizeTeam, 'findByPk').resolves(team as any);

    const { id, ...sendData } = team;

    const { status, body } = await chai.request(app).put('/teams/1')
      .send(sendData);

    expect(status).to.equal(200);
    expect(body.message).to.equal('Team updated');
  });

  it('Should delete a team', async function() {
    sinon.stub(SequelizeTeam, 'destroy').resolves();
    sinon.stub(SequelizeTeam, 'findByPk').resolves(team as any);

    const { status, body } = await chai
      .request(app)
      .delete('/teams/1');

    expect(status).to.deep.equal(200);
    expect(body.message).to.deep.equal('Team deleted');
  });
})