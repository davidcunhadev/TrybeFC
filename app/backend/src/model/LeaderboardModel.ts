import Leaderboard from '../utils/Leaderboard';
import SequelizeTeam from '../database/models/SequelizeTeam';
import SequelizeMatch from '../database/models/SequelizeMatch';
import SortLeaderboard from '../utils/sortLeaderboard';

export default class LeaderboardModel {
  constructor(
    private teamsModel = SequelizeTeam,
    private matchesModel = SequelizeMatch,
  ) { }

  public async getFullLeaderboard() {
    const allMatches = await this.matchesModel.findAll({ where: { inProgress: false } });
    const allTeams = await this.teamsModel.findAll();

    const leaderboard = allTeams.map((team) => {
      const teamMatches = allMatches.filter((match) =>
        match.homeTeamId === team.id || match.awayTeamId === team.id);
      const teamStats = new Leaderboard(teamMatches, team, undefined);
      return teamStats.getTeamInfos();
    });

    return SortLeaderboard.sort(leaderboard);
  }

  public async getLeaderboardHomeAndAway(isHomeTeam: boolean) {
    const allMatches = await this.matchesModel.findAll({ where: { inProgress: false } });
    const allTeams = await this.teamsModel.findAll();

    const leaderboard = allTeams.map((team) => {
      const filtMatches = allMatches
        .filter((match) => team.id === (isHomeTeam ? match.homeTeamId : match.awayTeamId));

      const teamStats = new Leaderboard(filtMatches, team, isHomeTeam);

      return teamStats.getTeamInfos();
    });

    return SortLeaderboard.sort(leaderboard);
  }
}
