import {
  AuditFullResponseBodySchema,
  AuditSearchResponseBodySchema,
  AuditSubmitRequestBodySchema,
  AuditSubmitResponseBodySchema,
  CertificationAuthorityNames,
} from '../src/audit.dto';

describe('AuditSubmitRequestBodySchema', () => {
  it('parse from json', () => {
    const json = {
      balanceSheetToBeSubmitted: 9,
      certificationAuthority: CertificationAuthorityNames.PEER_GROUP,
    };
    const parsed = AuditSubmitRequestBodySchema.parse(json);
    expect(parsed).toEqual(json);
  });
});

describe('AuditSubmitResponseBodySchema', () => {
  it('parse from json', () => {
    const json = {
      id: 10,
      submittedAt: new Date().toISOString(),
      certificationAuthority: CertificationAuthorityNames.PEER_GROUP,
    };
    const parsed = AuditSubmitResponseBodySchema.parse(json);
    expect(parsed).toEqual(json);
  });
});

describe('AuditSearchResponseBodySchema', () => {
  it('parse from json', () => {
    const json = {
      id: 10,
      submittedAt: new Date().toISOString(),
      certificationAuthority: CertificationAuthorityNames.AUDIT,
    };
    const parsed = AuditSearchResponseBodySchema.parse(json);
    expect(parsed).toEqual(json);
  });
});

describe('AuditGetResponseBodySchema', () => {
  it('parse from json', () => {
    const json = {
      id: 10,
      submittedBalanceSheetId: 7,
      originalCopyId: 10,
      auditCopyId: 8,
      submittedAt: new Date().toISOString(),
      certificationAuthority: CertificationAuthorityNames.PEER_GROUP,
    };
    const parsed = AuditFullResponseBodySchema.parse(json);
    expect(parsed).toEqual(json);
  });
});
