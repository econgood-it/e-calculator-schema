import { z } from 'zod';
import { isPercentage, isPositiveNumber } from './shared.schemas';

export const MatrixRatingBodySchema = z.object({
  shortName: z.string(),
  name: z.string(),
  points: z.number(),
  maxPoints: isPositiveNumber,
  percentageReached: isPercentage.optional(),
  notApplicable: z.boolean(),
});

export const MatrixBodySchema = z.object({
  ratings: MatrixRatingBodySchema.array(),
  totalPoints: z.number(),
});
