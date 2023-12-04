import { IMatch } from './IMatch';
import { updateInProgressBody } from './UpdateInProgressBody';

export interface IMatchModel {
  findAll(): Promise<IMatch[]>
  findByProgressStatus(status: boolean): Promise<IMatch[]>
  updateFinishMatch(id: number): Promise<void>
  updateInProgressMatch(id: number, data: updateInProgressBody): Promise<void>
  createNewMatch(match: Partial<IMatch>): Promise<IMatch>
}
