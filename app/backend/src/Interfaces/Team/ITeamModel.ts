import { NewEntity } from '../NewEntity';
import { ITeam } from './ITeam';

export interface ITeamModel {
  findAll(): Promise<ITeam[]>,
  findById(id: ITeam['id']): Promise<ITeam | null>,
  create(data: Partial<ITeam>): Promise<ITeam>,
  update(id: ITeam['id'], data: Partial<NewEntity<ITeam>>): Promise<ITeam | null>,
  delete(id: ITeam['id']): Promise<number>
}
