import { trpc } from '../utils';
import { ministryRouter } from './ministry/router';

export const appRouter = trpc.router({
  ministry: ministryRouter,
});

export type AppRouter = typeof appRouter;

export { default as healthRouter } from './health/router';
export { default as userRouter } from './user/router';
