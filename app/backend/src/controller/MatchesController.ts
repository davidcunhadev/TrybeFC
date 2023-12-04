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

    await this.matchesService.updateFinishMatch(Number(id));

    return res.status(200).json({ message: 'Finished' });
  }
}
