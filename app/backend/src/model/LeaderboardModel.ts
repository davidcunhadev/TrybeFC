import Leaderboard from '../utils/Leaderboard';
import SequelizeTeam from '../database/models/SequelizeTeam';
import SequelizeMatch from '../database/models/SequelizeMatch';

export default class LeaderboardModel {
  constructor(
    private teamsModel = SequelizeTeam,
    private matchesModel = SequelizeMatch,
  ) { }

  public async getLeaderboard(isHomeTeam: boolean) {
    const allMatches = await this.matchesModel.findAll({ where: { inProgress: false } });
    const allTeams = await this.teamsModel.findAll();

    const leaderboard = allTeams.map((team) => {
      const filtMatches = allMatches
        .filter((match) => team.id === (isHomeTeam ? match.homeTeamId : match.awayTeamId));

      const teamStats = new Leaderboard(filtMatches, team, isHomeTeam);

      return teamStats.getTeamInfos();
    });

    return leaderboard;
  }
}
