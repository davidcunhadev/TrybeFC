import TeamStats from '../Interfaces/Leaderboard/TeamStats';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import LeaderboardModel from '../model/LeaderboardModel';

export default class LeaderboardService {
  constructor(
    private leaderboardModel: LeaderboardModel = new LeaderboardModel(),
  ) { }

  public async getLeaderboard(isHomeTeam: boolean): Promise<ServiceResponse<TeamStats[]>> {
    const leaderboard = await this.leaderboardModel.getLeaderboard(isHomeTeam);

    return { status: 'SUCCESSFUL', data: leaderboard };
  }
}
