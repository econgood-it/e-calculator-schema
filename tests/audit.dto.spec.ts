import { AuditSubmitRequestBodySchema } from '../src/audit.dto';

describe('AuditSubmitRequestBodySchema', () => {
  it('parse from json', () => {
    const json = {
      balanceSheetToBeSubmitted: 9,
    };
    const parsed = AuditSubmitRequestBodySchema.parse(json);
    expect(parsed).toEqual(json);
  });
});
