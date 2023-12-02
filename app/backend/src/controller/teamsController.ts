import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import TeamsService from '../services/teamsService';

export default class TeamsController {
  constructor(
    private teamService = new TeamsService(),
  ) { }

  public async getAllTeams(req: Request, res: Response) {
    const serviceResponse = await this.teamService.getAllTeams();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async getTeamById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const serviceResponse = await this.teamService.getTeamById(id);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async createTeam(req: Request, res: Response) {
    const serviceResponse = await this.teamService.createTeam(req.body);
    res.status(201).json(serviceResponse.data);
  }

  public async updateTeam(req: Request, res: Response) {
    const id = Number(req.params.id);
    const team = req.body;
    const serviceResponse = await this.teamService.updateTeam(id, team);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(200).json(serviceResponse.data);
  }

  public async deleteTeam(req: Request, res: Response) {
    const id = Number(req.params.id);
    const serviceResponse = await this.teamService.deleteTeam(id);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(200).json(serviceResponse.data);
  }
}
