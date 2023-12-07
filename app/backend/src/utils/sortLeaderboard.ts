import TeamStats from '../Interfaces/Leaderboard/TeamStats';

export default class SortLeaderboard {
  static sort(teamStats: TeamStats[]): TeamStats[] {
    const sortLeaderboard = teamStats
      .sort((a, b) =>
        b.totalPoints - a.totalPoints
        || b.goalsBalance - a.goalsBalance
        || b.goalsFavor - a.goalsFavor);
    return sortLeaderboard;
  }
}
