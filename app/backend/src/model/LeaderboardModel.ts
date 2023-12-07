import Leaderboard from '../utils/Leaderboard';
import SequelizeTeam from '../database/models/SequelizeTeam';
import SequelizeMatch from '../database/models/SequelizeMatch';
import SortLeaderboard from '../utils/sortLeaderboard';
import TeamStats from '../Interfaces/Leaderboard/TeamStats';

export default class LeaderboardModel {
  constructor(
    private teamsModel = SequelizeTeam,
    private matchesModel = SequelizeMatch,
  ) { }

  public async getFullLeaderboard() {
    const allMatches = await this.matchesModel.findAll({ where: { inProgress: false } });
    const allTeams = await this.teamsModel.findAll();

    const leaderboard = allTeams
      .map((team) => ({ name: team.teamName, ...Leaderboard.getTeamInfos(allMatches, team.id) }));

    return SortLeaderboard.sort(leaderboard);
  }

  public async getLeaderboardHome() : Promise<TeamStats[]> {
    const allMatches = await this.matchesModel.findAll({ where: { inProgress: false } });
    const allTeams = await this.teamsModel.findAll();

    const leaderboard = allTeams.map((team) => {
      const filteredMatches = allMatches.filter((match) => team.id === match.homeTeamId);

      return { name: team.teamName, ...Leaderboard.getTeamInfos(filteredMatches, team.id) };
    });

    return SortLeaderboard.sort(leaderboard);
  }

  public async getLeaderboardAway() : Promise<TeamStats[]> {
    const allMatches = await this.matchesModel.findAll({ where: { inProgress: false } });
    const allTeams = await this.teamsModel.findAll();

    const leaderboard = allTeams.map((team) => {
      const filteredMatches = allMatches.filter((match) => team.id === match.awayTeamId);

      return { name: team.teamName, ...Leaderboard.getTeamInfos(filteredMatches, team.id) };
    });

    return SortLeaderboard.sort(leaderboard);
  }
}
