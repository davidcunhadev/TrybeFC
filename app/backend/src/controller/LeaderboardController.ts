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

  public async getLeaderboardHomeAndAway(req: Request, res: Response) {
    const route = req.path;
    const isHomeTeam = route === '/home';

    const serviceResponse = await this.leaderboardService.getLeaderboardHomeAndAway(isHomeTeam);

    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
