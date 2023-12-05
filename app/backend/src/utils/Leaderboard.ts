import { ITeam } from '../Interfaces/Team/ITeam';
import { IMatch } from '../Interfaces/Match/IMatch';

export default class Leaderboard {
  protected matches: IMatch[];
  protected isHomeTeam: boolean;
  public name: string;
  public totalPoints: number;
  public totalGames: number;
  public totalVictories: number;
  public totalDraws: number;
  public totalLosses: number;
  public goalsFavor: number;
  public goalsOwn: number;
  public goalsBalance: number;
  public efficiency: string;

  constructor(matches: IMatch[], team: ITeam, isHomeTeam: boolean) {
    this.matches = matches;
    this.isHomeTeam = isHomeTeam;
    this.name = team.teamName;
    this.totalPoints = 0;
    this.totalGames = this.matches.length;
    this.totalVictories = 0;
    this.totalDraws = 0;
    this.totalLosses = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    this.goalsBalance = 0;
    this.efficiency = '';
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

  public getTeamScore() {
    this.matches.forEach((match) => {
      if (match.homeTeamGoals === match.awayTeamGoals) {
        this.totalDraws += 1;
      }
    });

    if (this.isHomeTeam) {
      this.createHomeTeamScore();
    } else {
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
