import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
  ) { }

  public async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    const progress = typeof inProgress === 'string' ? inProgress : undefined;
    const serviceResponse = await this.matchesService.getAllMatches(progress);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async updateFinishMatch(req: Request, res: Response) {
    const { id } = req.params;

    const serviceResponse = await this.matchesService.updateFinishMatch(Number(id));

    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async updateInProgressMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;

    const serviceResponse = await this.matchesService.updateInProgressMatch(Number(id), body);

    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async createNewMatch(req: Request, res: Response) {
    const { body } = req;

    const serviceResponse = await this.matchesService.createNewMatch(body);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
