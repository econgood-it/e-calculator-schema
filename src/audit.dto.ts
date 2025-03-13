import { z } from 'zod';

export const AuditSubmitRequestBodySchema = z.object({
  balanceSheetToBeSubmitted: z.number(),
});

export const AuditSubmitResponseBodySchema = z.object({
  id: z.number(),
});
