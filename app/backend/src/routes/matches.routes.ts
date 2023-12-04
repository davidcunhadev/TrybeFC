import { Request, Response, Router } from 'express';
import MatchesController from '../controller/MatchesController';
import Validations from '../middlewares/validateToken';

const matchesController = new MatchesController();

const matchesRouter = Router();

matchesRouter.get(
  '/',
  (req: Request, res: Response) => matchesController.getAllMatches(req, res),
);

matchesRouter.patch(
  '/:id/finish',
  Validations.validateToken,
  (req: Request, res: Response) => matchesController.updateFinishMatch(req, res),
);

export default matchesRouter;
