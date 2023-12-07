import { ITeam } from '../Interfaces/Team/ITeam';
import { IMatch } from '../Interfaces/Match/IMatch';

export default class Leaderboard {
  protected matches: IMatch[];
  protected isHomeTeam: boolean | undefined;
  public name = '';
  public totalPoints = 0;
  public totalGames = 0;
  public totalVictories = 0;
  public totalDraws = 0;
  public totalLosses = 0;
  public goalsFavor = 0;
  public goalsOwn = 0;
  public goalsBalance = 0;
  public efficiency = '';

  constructor(matches: IMatch[], team: ITeam, isHomeTeam: boolean | undefined) {
    this.matches = matches;
    this.isHomeTeam = isHomeTeam;
    this.name = team.teamName;
    this.totalGames = this.matches.length;
    this.getTeamScore();
  }

  public calculatePoints() {
    const wins = this.totalVictories * 3;
    const draws = this.totalDraws;
    this.totalPoints = wins + draws;

    this.goalsBalance = this.goalsFavor - this.goalsOwn;

    const efficiency = ((this.totalPoints / (this.totalGames * 3)) * 100);
    this.efficiency = efficiency.toFixed(2);
  }

  public createHomeTeamScore() {
    this.matches.forEach((match) => {
      this.goalsFavor += match.homeTeamGoals;
      this.goalsOwn += match.awayTeamGoals;

      if (match.homeTeamGoals > match.awayTeamGoals) {
        this.totalVictories += 1;
      } if (match.homeTeamGoals < match.awayTeamGoals) {
        this.totalLosses += 1;
      }
    });
  }

  public createAwayTeamScore() {
    this.matches.forEach((match) => {
      this.goalsFavor += match.awayTeamGoals;
      this.goalsOwn += match.homeTeamGoals;

      if (match.awayTeamGoals > match.homeTeamGoals) {
        this.totalVictories += 1;
      } if (match.awayTeamGoals < match.homeTeamGoals) {
        this.totalLosses += 1;
      }
    });
  }

  public createFullScore() {
    this.matches.forEach((match) => {
      if (match.homeTeamGoals > match.awayTeamGoals) {
        this.totalVictories += 1;
      }

      if (match.awayTeamGoals > match.homeTeamGoals) {
        this.totalLosses += 1;
      }
    });
  }

  public getTeamScore() {
    this.matches.forEach((match) => {
      if (match.homeTeamGoals === match.awayTeamGoals) {
        this.totalDraws += 1;
      }
    });

    if (!this.isHomeTeam && this.isHomeTeam === undefined) {
      this.createFullScore();
    }

    if (this.isHomeTeam) {
      this.createHomeTeamScore();
    }

    if (!this.isHomeTeam) {
      this.createAwayTeamScore();
    }

    this.calculatePoints();
  }

  public getTeamInfos() {
    const {
      name,
      totalPoints, totalGames,
      totalVictories, totalLosses, totalDraws,
      goalsFavor, goalsOwn, goalsBalance,
      efficiency,
    } = this;
    return {
      name,
      totalPoints,
      totalGames,
      totalVictories,
      totalLosses,
      totalDraws,
      goalsFavor,
      goalsOwn,
      goalsBalance,
      efficiency };
  }
}
