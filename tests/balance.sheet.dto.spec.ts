import { CompanyFactsPatchRequestBodySchema } from '../src/company.facts.dto';
import { BalanceSheetCreateRequestBodySchema } from '../src/balance.sheet.dto';
import { BalanceSheetType, BalanceSheetVersion } from '../src/shared.schemas';

describe('BalanceSheetCreateRequestBodySchema', () => {
  const jsonConst = {
    type: BalanceSheetType.Full,
    version: BalanceSheetVersion.v5_0_8,
  };

  it('parse from json', () => {
    const companyFactsPatchRequestBody =
      BalanceSheetCreateRequestBodySchema.parse(jsonConst);
    expect(companyFactsPatchRequestBody).toMatchObject({
      ...jsonConst,
      companyFacts: {
        totalPurchaseFromSuppliers: 0,
        totalStaffCosts: 0,
        profit: 0,
        financialCosts: 0,
      },
      ratings: [],
    });
  });
});
