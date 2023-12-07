import TeamStats from '../Interfaces/Leaderboard/TeamStats';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import LeaderboardModel from '../model/LeaderboardModel';

export default class LeaderboardService {
  constructor(
    private leaderboardModel: LeaderboardModel = new LeaderboardModel(),
  ) { }

  public async getFullLeaderboard():Promise<ServiceResponse<TeamStats[]>> {
    const leaderboard = await this.leaderboardModel.getFullLeaderboard();

    return { status: 'SUCCESSFUL', data: leaderboard };
  }

  public async getLeaderboardHome(): Promise<ServiceResponse<TeamStats[]>> {
    const leaderboard = await this.leaderboardModel.getLeaderboardHome();

    return { status: 'SUCCESSFUL', data: leaderboard };
  }

  public async getLeaderboardAway(): Promise<ServiceResponse<TeamStats[]>> {
    const leaderboard = await this.leaderboardModel.getLeaderboardAway();

    return { status: 'SUCCESSFUL', data: leaderboard };
  }
}
