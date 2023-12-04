import { NewEntity } from '../Interfaces/NewEntity';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';
import { ITeam } from '../Interfaces/Team/ITeam';
import TeamsModel from '../model/TeamsModel';

export default class TeamsService {
  constructor(
    private teamModel: TeamsModel = new TeamsModel(),
  ) { }

  public async getAllTeams(): Promise<ServiceResponse<ITeam[]>> {
    const allTeams = await this.teamModel.findAll();

    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public async getTeamById(id: number): Promise<ServiceResponse<ITeam>> {
    const team = await this.teamModel.findById(id);
    if (!team) {
      return { status: 'NOT_FOUND', data: { message: `Team ${id} not found` } };
    }

    return { status: 'SUCCESSFUL', data: team };
  }

  public async createTeam(team: NewEntity<ITeam>): Promise<ServiceResponse<ITeam>> {
    const newTeam = await this.teamModel.create(team);

    return { status: 'CREATED', data: newTeam };
  }

  public async updateTeam(id: number, team: ITeam): Promise<ServiceResponse<ServiceMessage>> {
    const foundTeam = await this.teamModel.findById(id);
    if (!foundTeam) return { status: 'NOT_FOUND', data: { message: `Team ${id} not found` } };

    const updatedTeam = await this.teamModel.update(id, team);
    if (!updatedTeam) return { status: 'CONFLICT', data: { message: 'Unavailable updates' } };

    return { status: 'SUCCESSFUL', data: { message: 'Team updated' } };
  }

  public async deleteTeam(id: number): Promise<ServiceResponse<ServiceMessage>> {
    const foundTeam = await this.teamModel.findById(id);
    if (!foundTeam) return { status: 'NOT_FOUND', data: { message: `Team ${id} not found` } };

    await this.teamModel.delete(id);

    return { status: 'SUCCESSFUL', data: { message: 'Team deleted' } };
  }
}
