import { IMatch } from '../Interfaces/Match/IMatch';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import MatchesModel from '../model/MatchesModel';

export default class MatchesService {
  constructor(
    private matchesModel: MatchesModel = new MatchesModel(),
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
}
