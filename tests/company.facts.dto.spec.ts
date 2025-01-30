import {
  CompanyFactsCreateRequestBodySchema,
  CompanyFactsPatchRequestBodySchema,
  CompanyFactsResponseBodySchema,
  EmployeesFractionSchema,
  IndustrySectorSchema,
} from '../src/company.facts.dto';
import { CompanyFactsFactory } from './factories';

describe('CompanyFactsCreateRequestBodySchema', () => {
  it('should parse json with negative profit', () => {
    const json = { ...CompanyFactsFactory.defaultRequest(), profit: -2 };
    const companyFacts = CompanyFactsCreateRequestBodySchema.parse(json);
    expect(companyFacts).toEqual(json);
  });
});

describe('EmployeesFraction', () => {
  it('should parse json', () => {
    const json = [
      {
        countryCode: 'DEU',
        percentage: 10,
      },
      {
        countryCode: 'BEL',
        percentage: 9,
      },
    ];
    const parsed = EmployeesFractionSchema.parse(json);
    expect(parsed).toEqual(json);
  });

  it('should fail parsing json if percentage is zero', () => {
    const json = [
      {
        countryCode: 'DEU',
        percentage: 0,
      },
      {
        countryCode: 'BEL',
        percentage: 9,
      },
    ];
    const result = EmployeesFractionSchema.safeParse(json);
    expect(result.success).toBeFalsy();
    expect(!result.success && result.error.errors[0].message).toEqual(
      'Percentage should be between 1 and 100'
    );
  });
});

describe('IndustrySectors', () => {
  it('should parse json', () => {
    const json = [
      {
        industryCode: 'A',
        amountOfTotalTurnover: 4,
        description: 'des',
      },
      {
        industryCode: 'Ca',
        amountOfTotalTurnover: 20,
        description: 'des',
      },
    ];
    const parsed = IndustrySectorSchema.parse(json);
    expect(parsed).toEqual(json);
  });

  it('should fail parsing json if amount of total turnover is zero', () => {
    const json = [
      {
        industryCode: 'A',
        amountOfTotalTurnover: 0,
        description: 'des',
      },
      {
        industryCode: 'Ca',
        amountOfTotalTurnover: 20,
        description: 'des',
      },
    ];
    const result = IndustrySectorSchema.safeParse(json);
    expect(result.success).toBeFalsy();
    expect(!result.success && result.error.errors[0].message).toEqual(
      'Percentage should be between 1 and 100'
    );
  });
});

describe('CompanyFactsPatchRequestBodySchema', () => {
  it('parse from json', () => {
    const companyFactsPatchRequestBody =
      CompanyFactsPatchRequestBodySchema.parse(
        CompanyFactsFactory.defaultRequest()
      );
    expect(companyFactsPatchRequestBody).toMatchObject(
      CompanyFactsFactory.defaultRequest()
    );
  });

  it('allows negative values for incomeFromFinancialInvestments and additionsToFixedAssets', async () => {
    const result = CompanyFactsPatchRequestBodySchema.safeParse({
      incomeFromFinancialInvestments: -20,
      additionsToFixedAssets: -70,
    });
    expect(result.success).toBeTruthy();
  });

  it('allows negative values for profit', async () => {
    const json = { ...CompanyFactsFactory.defaultRequest(), profit: -2 };
    const companyFacts = CompanyFactsPatchRequestBodySchema.parse(json);
    expect(companyFacts).toEqual(json);
  });

  describe('parse json where value is missing for field', () => {
    const json = { ...CompanyFactsFactory.defaultRequest() };

    it('financialAssetsAndCashBalance', () => {
      const companyFactsPatchRequestBody =
        CompanyFactsPatchRequestBodySchema.parse({
          ...json,
          financialAssetsAndCashBalance: undefined,
        });
      expect(
        companyFactsPatchRequestBody.financialAssetsAndCashBalance
      ).toBeUndefined();
    });

    it('profit', () => {
      const companyFactsPatchRequestBody =
        CompanyFactsPatchRequestBodySchema.parse({
          ...json,
          profit: undefined,
        });

      expect(companyFactsPatchRequestBody.profit).toBeUndefined();
    });

    it('numberOfEmployees', () => {
      const companyFactsPatchRequestBody =
        CompanyFactsPatchRequestBodySchema.parse({
          ...json,
          numberOfEmployees: undefined,
        });
      expect(companyFactsPatchRequestBody.numberOfEmployees).toBeUndefined();
    });

    it('hasCanteen', () => {
      const companyFactsPatchRequestBody =
        CompanyFactsPatchRequestBodySchema.parse({
          ...json,
          hasCanteen: undefined,
        });
      expect(companyFactsPatchRequestBody.hasCanteen).toBeUndefined();
    });

    it('averageJourneyToWorkForStaffInKm', () => {
      const companyFactsPatchRequestBody =
        CompanyFactsPatchRequestBodySchema.parse({
          ...json,
          averageJourneyToWorkForStaffInKm: undefined,
        });
      expect(
        companyFactsPatchRequestBody.averageJourneyToWorkForStaffInKm
      ).toBeUndefined();
    });

    it('isB2B', () => {
      const companyFactsPatchRequestBody =
        CompanyFactsPatchRequestBodySchema.parse({ ...json, isB2B: undefined });
      expect(companyFactsPatchRequestBody.isB2B).toBeUndefined();
    });
  });
});

describe('CompanyFactsResponseBodySchema', () => {
  it('parse from json', () => {
    const companyFactsResponse = CompanyFactsResponseBodySchema.parse(
      CompanyFactsFactory.defaultResponse()
    );
    expect(companyFactsResponse).toMatchObject(
      CompanyFactsFactory.defaultResponse()
    );
  });

  it('parse from json with missing hasCanteen', () => {
    const { hasCanteen, ...rest } = CompanyFactsFactory.defaultResponse();
    expect(hasCanteen).toBe(true);
    const result = CompanyFactsResponseBodySchema.parse(rest);
    expect(result).toEqual(rest);
  });

  it('parse from json with negative profit', () => {
    const json = { ...CompanyFactsFactory.defaultResponse(), profit: -3 };
    const companyFactsResponse = CompanyFactsResponseBodySchema.parse(json);
    expect(companyFactsResponse).toEqual(json);
  });

  it('parse from json with missing countryCode for main origin of other suppliers', () => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const json: any = CompanyFactsFactory.defaultResponse();
    delete json.mainOriginOfOtherSuppliers.countryCode;
    const result = CompanyFactsResponseBodySchema.parse(json);
    expect(result).toEqual(json);
  });
});
