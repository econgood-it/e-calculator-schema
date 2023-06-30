import {
  BalanceSheetCreateRequestBodySchema,
  BalanceSheetPatchRequestBodySchema,
  BalanceSheetResponseBodySchema,
} from '../src/balance.sheet.dto';
import { BalanceSheetType, BalanceSheetVersion } from '../src/shared.schemas';
import { CompanyFactsFactory } from './factories';

const stakeholderWeights = [
  { shortName: 'A', weight: 0.5 },
  { shortName: 'C', weight: 1.5 },
];
const typeAndVersion = {
  type: BalanceSheetType.Full,
  version: BalanceSheetVersion.v5_0_8,
};
describe('BalanceSheetCreateRequestBodySchema', () => {
  it('parse from json', () => {
    const companyFactsPatchRequestBody =
      BalanceSheetCreateRequestBodySchema.parse(typeAndVersion);
    expect(companyFactsPatchRequestBody).toMatchObject({
      ...typeAndVersion,
      companyFacts: {
        totalPurchaseFromSuppliers: 0,
        totalStaffCosts: 0,
        profit: 0,
        financialCosts: 0,
      },
      ratings: [],
      stakeholderWeights: [],
    });
  });

  it('parse from json with defined stakeholder weights', () => {
    const companyFactsPatchRequestBody =
      BalanceSheetCreateRequestBodySchema.parse({
        ...typeAndVersion,
        stakeholderWeights,
      });
    expect(companyFactsPatchRequestBody).toMatchObject({
      ...typeAndVersion,
      stakeholderWeights,
    });
  });
});

describe('BalanceSheetPatchRequestBodySchema', () => {
  it('parse from json without defined stakeholder weights', () => {
    const companyFactsPatchRequestBody =
      BalanceSheetPatchRequestBodySchema.parse({});
    expect(companyFactsPatchRequestBody).toMatchObject({
      stakeholderWeights: [],
    });
  });

  it('parse from json with defined stakeholder weights', () => {
    const json = { stakeholderWeights };
    const companyFactsPatchRequestBody =
      BalanceSheetPatchRequestBodySchema.parse(json);
    expect(companyFactsPatchRequestBody).toMatchObject(json);
  });
});

describe('BalanceSheetResponseBodySchema', () => {
  it('parse from json with defined stakeholder weights', () => {
    const json = {
      ...typeAndVersion,
      ratings: [],
      companyFacts: CompanyFactsFactory.defaultResponse(),
      stakeholderWeights,
    };
    const companyFactsPatchRequestBody =
      BalanceSheetResponseBodySchema.parse(json);
    expect(companyFactsPatchRequestBody).toMatchObject(json);
  });
});
