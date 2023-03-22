import { z } from 'zod';

const DiffSchema = z.any();

export const BalanceSheetExcelDiffResponseBody = z.object({
  lhs: z.string(),
  rhs: z.string(),
  diffStakeHolderWeights: DiffSchema.optional(),
  diffTopicWeights: DiffSchema.optional(),
  diffCalc: DiffSchema.optional(),
  diff: DiffSchema.optional(),
});
