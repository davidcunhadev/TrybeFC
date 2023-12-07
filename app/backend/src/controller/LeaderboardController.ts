import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class LeaderboardController {
  constructor(
    private leaderboardService = new LeaderboardService(),
  ) { }

  public async getFullLeaderboard(req: Request, res: Response) {
    const serviceResponse = await this.leaderboardService.getFullLeaderboard();

    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async getLeaderboardHome(req: Request, res: Response) {
    const serviceResponse = await this.leaderboardService.getLeaderboardHome();

    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async getLeaderboardAway(req: Request, res: Response) {
    const serviceResponse = await this.leaderboardService.getLeaderboardAway();

    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
