import TeamStats from '../Interfaces/Leaderboard/TeamStats';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import LeaderboardModel from '../model/LeaderboardModel';

export default class LeaderboardService {
  constructor(
    private leaderboardModel: LeaderboardModel = new LeaderboardModel(),
  ) { }

  public async getLeaderboard(isHomeTeam: boolean | undefined):
  Promise<ServiceResponse<TeamStats[]>> {
    if (isHomeTeam === undefined) {
      return { status: 'BAD_REQUEST', data: { message: 'Bad Request' } };
    }
    const leaderboard = await this.leaderboardModel.getLeaderboard(isHomeTeam);

    return { status: 'SUCCESSFUL', data: leaderboard };
  }
}
