import { z } from 'zod';

export const AuditSubmitRequestBodySchema = z.object({
  balanceSheetToBeSubmitted: z.number(),
});

const AuditPartialResponseBodySchema = z.object({
  id: z.number(),
  submittedAt: z.string().datetime(),
});

export const AuditSubmitResponseBodySchema = AuditPartialResponseBodySchema;
export const AuditSearchResponseBodySchema = AuditPartialResponseBodySchema;

export const AuditFullResponseBodySchema =
  AuditPartialResponseBodySchema.extend({
    submittedBalanceSheetId: z.number(),
    originalCopyId: z.number(),
    auditCopyId: z.number(),
  });
