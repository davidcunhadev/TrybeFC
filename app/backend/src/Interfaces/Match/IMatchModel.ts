import { IMatch } from './IMatch';

export interface IMatchModel {
  findAll(): Promise<IMatch[]>
  findByProgressStatus(status: boolean): Promise<IMatch[]>
}