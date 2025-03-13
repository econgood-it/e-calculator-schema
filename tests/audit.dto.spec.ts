import {
  AuditSubmitRequestBodySchema,
  AuditSubmitResponseBodySchema,
} from '../src/audit.dto';

describe('AuditSubmitRequestBodySchema', () => {
  it('parse from json', () => {
    const json = {
      balanceSheetToBeSubmitted: 9,
    };
    const parsed = AuditSubmitRequestBodySchema.parse(json);
    expect(parsed).toEqual(json);
  });
});

describe('AuditSubmitResponseBodySchema', () => {
  it('parse from json', () => {
    const json = {
      id: 10,
    };
    const parsed = AuditSubmitResponseBodySchema.parse(json);
    expect(parsed).toEqual(json);
  });
});
