import SequelizeTeam from '../database/models/SequelizeTeam';
import { IMatch } from '../Interfaces/Match/IMatch';
import SequelizeMatch from '../database/models/SequelizeMatch';
import { IMatchModel } from '../Interfaces/Match/IMatchModel';

export default class MatchesModel implements IMatchModel {
  private model = SequelizeMatch;

  async findAll(): Promise<IMatch[]> {
    const allMatches = await this.model.findAll({
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return allMatches;
  }

  async findByProgressStatus(status: boolean): Promise<IMatch[]> {
    const allMatchesInProgress = await this.model.findAll({
      where: {
        inProgress: status,
      },
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return allMatchesInProgress;
  }

  async updateFinishMatch(id: number): Promise<[number]> {
    const updatedMatch = await this.model.update({ inProgress: false }, { where: { id } });

    return updatedMatch;
  }
}
