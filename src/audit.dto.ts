import { z } from 'zod';

export enum CertificationAuthorityNames {
  AUDIT = 'AUDIT',
  PEER_GROUP = 'PEER_GROUP',
}

export const AuditSubmitRequestBodySchema = z.object({
  balanceSheetToBeSubmitted: z.number(),
  certificationAuthority: z.nativeEnum(CertificationAuthorityNames),
});

const AuditPartialResponseBodySchema = z.object({
  id: z.number(),
  submittedAt: z.string().datetime(),
  certificationAuthority: z.nativeEnum(CertificationAuthorityNames),
});

const AuditExtendedResponseBodySchema = z.object({
  id: z.number(),
  submittedBalanceSheetId: z.number(),
  submittedAt: z.string().datetime(),
  certificationAuthority: z.nativeEnum(CertificationAuthorityNames),
});

export const AuditSubmitResponseBodySchema = AuditPartialResponseBodySchema;
export const AuditSearchResponseBodySchema = AuditExtendedResponseBodySchema;

export const AuditFullResponseBodySchema =
  AuditPartialResponseBodySchema.extend({
    submittedBalanceSheetId: z.number(),
    originalCopyId: z.number(),
    auditCopyId: z.number(),
  });
