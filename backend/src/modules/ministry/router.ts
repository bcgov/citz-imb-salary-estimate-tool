import { trpc } from '../../utils';
import dataSource from '../../dataSource';
import { Ministry } from './entity';
import { z } from 'zod';

const repository = dataSource.getRepository(Ministry);

export const ministryRouter = trpc.router({
  list: trpc.procedure.query(() => repository.find()),
  create: trpc.procedure
    .input(z.object({ ministry_id: z.string(), ministry_name: z.string() }))
    .mutation(({ input }) => {
      const item = repository.create({ ...input });
      repository.save(item);
    }),
});
