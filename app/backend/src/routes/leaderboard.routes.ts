import { Request, Response, Router } from 'express';
import LeaderboardController from '../controller/LeaderboardController';

const leaderboardController = new LeaderboardController();

const leaderboardRouter = Router();

leaderboardRouter.get(
  '/',
  (req: Request, res: Response) => leaderboardController.getFullLeaderboard(req, res),
);

leaderboardRouter.get(
  '/home',
  (req: Request, res: Response) => leaderboardController.getLeaderboardHome(req, res),
);

leaderboardRouter.get(
  '/away',
  (req: Request, res: Response) => leaderboardController.getLeaderboardAway(req, res),
);

export default leaderboardRouter;
