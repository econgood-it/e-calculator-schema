import {
  BalanceSheetCreateRequestBodySchema,
  BalanceSheetItemsResponseSchema,
  BalanceSheetPatchRequestBodySchema,
  BalanceSheetResponseBodySchema,
} from '../src/balance.sheet.dto';
import { BalanceSheetType, BalanceSheetVersion } from '../src/shared.schemas';
import { CompanyFactsFactory } from './factories';

const stakeholderWeights = [
  { shortName: 'A', weight: 0.5 },
  { shortName: 'C', weight: 1.5 },
];
const generalInformation = {
  contactPerson: {
    name: 'John Doe',
    email: 'john@example.com',
  },
  company: {
    name: 'ECG GmbH',
  },
  period: {
    start: new Date('2021-01-01'),
    end: new Date('2021-12-31'),
  },
};
const typeAndVersionAndGeneralInfo = {
  type: BalanceSheetType.Full,
  version: BalanceSheetVersion.v5_0_8,
  generalInformation,
};

describe('BalanceSheetCreateRequestBodySchema', () => {
  it('parse from json', () => {
    const companyFactsPatchRequestBody =
      BalanceSheetCreateRequestBodySchema.parse(typeAndVersionAndGeneralInfo);
    expect(companyFactsPatchRequestBody).toMatchObject({
      ...typeAndVersionAndGeneralInfo,
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

  it('parse from json with version 5.10', () => {
    const json = {
      type: BalanceSheetType.Full,
      version: BalanceSheetVersion.v5_1_0,
      generalInformation,
    };
    const parsed = BalanceSheetCreateRequestBodySchema.parse(json);
    expect(parsed.version).toBe(BalanceSheetVersion.v5_1_0);
  });

  it('parse from json with version 5.09', () => {
    const json = {
      type: BalanceSheetType.Full,
      version: BalanceSheetVersion.v5_0_9,
      generalInformation,
    };
    const parsed = BalanceSheetCreateRequestBodySchema.parse(json);
    expect(parsed.version).toBe(BalanceSheetVersion.v5_0_9);
  });

  it('parse from json with defined stakeholder weights', () => {
    const companyFactsPatchRequestBody =
      BalanceSheetCreateRequestBodySchema.parse({
        ...typeAndVersionAndGeneralInfo,
        stakeholderWeights,
      });
    expect(companyFactsPatchRequestBody).toMatchObject({
      ...typeAndVersionAndGeneralInfo,
      stakeholderWeights,
    });
  });
});

describe('BalanceSheetPatchRequestBodySchema', () => {
  it('parse from empty json', () => {
    const companyFactsPatchRequestBody =
      BalanceSheetPatchRequestBodySchema.parse({});
    expect(companyFactsPatchRequestBody).toMatchObject({
      ratings: [],
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
      ...typeAndVersionAndGeneralInfo,
      id: 1,
      ratings: [],
      companyFacts: CompanyFactsFactory.defaultResponse(),
      stakeholderWeights,
    };
    const companyFactsPatchRequestBody =
      BalanceSheetResponseBodySchema.parse(json);
    expect(companyFactsPatchRequestBody).toMatchObject(json);
  });
});

describe('BalanceSheetItemsResponseSchema', () => {
  it('is parsed from json', () => {
    const json = [
      {
        id: 7,
        version: BalanceSheetVersion.v5_0_9,
        type: BalanceSheetType.Compact,
      },
      {
        id: 8,
        version: BalanceSheetVersion.v5_1_0,
        type: BalanceSheetType.Full,
      },
    ];
    const parsed = BalanceSheetItemsResponseSchema.parse(json);
    expect(parsed).toEqual(json);
  });
});
