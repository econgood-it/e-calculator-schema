import { z } from 'zod';

export const AuditSubmitRequestBodySchema = z.object({
  balanceSheetToBeSubmitted: z.number(),
});
