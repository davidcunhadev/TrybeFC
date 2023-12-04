import { updateInProgressBody } from '../Interfaces/Match/UpdateInProgressBody';
import { IMatch } from '../Interfaces/Match/IMatch';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import MatchesModel from '../model/MatchesModel';
import TeamsModel from '../model/TeamsModel';

export default class MatchesService {
  constructor(
    private matchesModel: MatchesModel = new MatchesModel(),
    private teamsModel = new TeamsModel(),
  ) { }

  public async getAllMatches(status: string | undefined): Promise<ServiceResponse<IMatch[]>> {
    if (status !== undefined) {
      const inProgress = status === 'true';
      const inProgressMatches = await this.matchesModel.findByProgressStatus(inProgress);

      return { status: 'SUCCESSFUL', data: inProgressMatches };
    }
    const allMatches = await this.matchesModel.findAll();

    return { status: 'SUCCESSFUL', data: allMatches };
  }

  public async updateFinishMatch(id: number) {
    await this.matchesModel.updateFinishMatch(id);

    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }

  public async updateInProgressMatch(id: number, data: updateInProgressBody) {
    await this.matchesModel.updateInProgressMatch(id, data);

    return { status: 'SUCCESSFUL', data: { message: 'Match updated' } };
  }

  public async createNewMatch(data: IMatch): Promise<ServiceResponse<IMatch>> {
    const homeTeamExists = await this.teamsModel.findById(data.homeTeamId);
    const awayTeamExists = await this.teamsModel.findById(data.awayTeamId);

    if (!homeTeamExists || !awayTeamExists) {
      return { status: 'NOT_FOUND', data: { message: 'There is no team with such id!' } };
    }
    const newMatch = await this.matchesModel.createNewMatch(data);

    return { status: 'CREATED', data: newMatch };
  }
}
