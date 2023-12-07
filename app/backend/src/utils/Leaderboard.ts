import { IMatch } from '../Interfaces/Match/IMatch';

export default class Leaderboard {
  static calculateLosses(matches: IMatch[], teamId: number) {
    let losses = 0;
    const lostMatches = matches.filter((match) =>
      (match.homeTeamId === teamId && match.homeTeamGoals < match.awayTeamGoals)
      || (match.awayTeamId === teamId && match.awayTeamGoals < match.homeTeamGoals));

    lostMatches.forEach(() => {
      losses += 1;
    });

    return losses;
  }

  static calculateVictories(matches: IMatch[], teamId: number) {
    let victories = 0;
    const victoriesMatches = matches.filter((match) =>
      (match.homeTeamId === teamId && match.homeTeamGoals > match.awayTeamGoals)
      || (match.awayTeamId === teamId && match.awayTeamGoals > match.homeTeamGoals));

    victoriesMatches.forEach(() => {
      victories += 1;
    });

    return victories;
  }

  static calculateDraws(matches: IMatch[], teamId: number) {
    let draws = 0;
    const drawsMatches = matches.filter((match) =>
      (match.homeTeamId === teamId && match.homeTeamGoals === match.awayTeamGoals)
      || (match.awayTeamId === teamId && match.awayTeamGoals === match.homeTeamGoals));

    drawsMatches.forEach(() => {
      draws += 1;
    });

    return draws;
  }

  static calculatePoints(matches: IMatch[], teamId: number) {
    const wins = this.calculateVictories(matches, teamId);
    const draws = this.calculateDraws(matches, teamId);
    const points = wins * 3 + draws * 1;
    return points;
  }

  static calculateGoalsFavor(matches: IMatch[], teamId: number) {
    let goalsFavor = 0;

    matches.forEach((match) => {
      if (match.homeTeamId === teamId) {
        goalsFavor += match.homeTeamGoals;
      }

      if (match.awayTeamId === teamId) {
        goalsFavor += match.awayTeamGoals;
      }
    });
    return goalsFavor;
  }

  static calculateGoalsOwn(matches: IMatch[], teamId: number) {
    let goalsOwn = 0;

    matches.forEach((match) => {
      if (match.homeTeamId === teamId) {
        goalsOwn += match.homeTeamGoals;
      }

      if (match.awayTeamId === teamId) {
        goalsOwn += match.awayTeamGoals;
      }
    });
    return goalsOwn;
  }

  static calculateTotalGames(matches: IMatch[], teamId: number) {
    let totalGames = 0;
    matches.forEach((match) => {
      if (match.homeTeamId === teamId || match.awayTeamId === teamId) {
        totalGames += 1;
      }
    });
    return totalGames;
  }

  static calculateGoalsBalance(matches: IMatch[], teamId: number) {
    const goalsFavor = this.calculateGoalsFavor(matches, teamId);
    const goalsOwn = this.calculateGoalsOwn(matches, teamId);

    const balance = goalsFavor - goalsOwn;
    return balance;
  }

  static calculateEfficiency(matches: IMatch[], teamId: number) {
    const totalPoints = this.calculatePoints(matches, teamId);
    const totalGames = this.calculateTotalGames(matches, teamId);

    const efficiency = ((totalPoints / (totalGames * 3)) * 100);
    return efficiency.toFixed(2);
  }

  static getTeamInfos(matches: IMatch[], teamId: number) {
    return {
      totalPoints: this.calculatePoints(matches, teamId),
      totalGames: this.calculateTotalGames(matches, teamId),
      totalVictories: this.calculateVictories(matches, teamId),
      totalLosses: this.calculateLosses(matches, teamId),
      totalDraws: this.calculateDraws(matches, teamId),
      goalsFavor: this.calculateGoalsFavor(matches, teamId),
      goalsOwn: this.calculateGoalsOwn(matches, teamId),
      goalsBalance: this.calculateGoalsBalance(matches, teamId),
      efficiency: this.calculateEfficiency(matches, teamId),
    };
  }
}
