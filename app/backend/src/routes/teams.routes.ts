import { Request, Response, Router } from 'express';
import TeamsController from '../controller/TeamsController';

const teamController = new TeamsController();

const teamRouter = Router();

teamRouter.get(
  '/',
  (req: Request, res: Response) => teamController.getAllTeams(req, res),
);

teamRouter.get(
  '/:id',
  (req: Request, res: Response) => teamController.getTeamById(req, res),
);

teamRouter.post(
  '/',
  (req: Request, res: Response) => teamController.createTeam(req, res),
);

teamRouter.put(
  '/:id',
  (req: Request, res: Response) => teamController.updateTeam(req, res),
);

teamRouter.delete(
  '/:id',
  (req: Request, res: Response) => teamController.deleteTeam(req, res),
);

export default teamRouter;
