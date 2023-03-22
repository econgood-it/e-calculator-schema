import { z } from 'zod';

export const MatrixRatingBodySchema = z.object({
  shortName: z.string(),
  name: z.string(),
  points: z.number(),
  maxPoints: z.number(),
  percentageReached: z.number().optional(),
  notApplicable: z.boolean(),
});
