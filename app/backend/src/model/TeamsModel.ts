import { ITeam } from '../Interfaces/Team/ITeam';
import SequelizeTeam from '../database/models/SequelizeTeam';
import { NewEntity } from '../Interfaces/NewEntity';
import { ITeamModel } from '../Interfaces/Team/ITeamModel';

export default class TeamsModel implements ITeamModel {
  private model = SequelizeTeam;

  async findAll(): Promise<ITeam[]> {
    const allTeams = await this.model.findAll();

    return allTeams;
  }

  async findById(id: number): Promise<ITeam | null> {
    const team = await this.model.findByPk(id);

    if (team === null) return null;

    return team;
  }

  async create(data: NewEntity<ITeam>): Promise<ITeam> {
    const newTeam = await this.model.create(data);

    return newTeam;
  }

  async update(id: number, data: Partial<NewEntity<ITeam>>): Promise<ITeam | null> {
    const [affectedRows] = await this.model.update(data, { where: { id } });
    if (affectedRows === 0) return null;

    return this.findById(id);
  }

  async delete(id: number): Promise<number> {
    return this.model.destroy({ where: { id } });
  }
}
