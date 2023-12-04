import { Request, Response, Router } from 'express';
import MatchesController from '../controller/MatchesController';
import validationsToken from '../middlewares/validateToken';
import validationsBody from '../middlewares/validateNewMatch';

const matchesController = new MatchesController();

const matchesRouter = Router();

matchesRouter.get(
  '/',
  (req: Request, res: Response) => matchesController.getAllMatches(req, res),
);

matchesRouter.patch(
  '/:id/finish',
  validationsToken.validateToken,
  (req: Request, res: Response) => matchesController.updateFinishMatch(req, res),
);

matchesRouter.patch(
  '/:id',
  validationsToken.validateToken,
  (req: Request, res: Response) => matchesController.updateInProgressMatch(req, res),
);

matchesRouter.post(
  '/',
  validationsToken.validateToken,
  validationsBody.ValidateNewMatch,
  (req: Request, res: Response) => matchesController.createNewMatch(req, res),
);

export default matchesRouter;
