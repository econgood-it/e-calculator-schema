import {
  CompanyFactsCreateRequestBodySchema,
  CompanyFactsPatchRequestBodySchema,
  CompanyFactsResponseBodySchema,
} from '../src/company.facts.dto';
import { CompanyFactsFactory } from './factories';

describe('CompanyFactsCreateRequestBodySchema', () => {
  it('should parse json with negative profit', () => {
    const json = { ...CompanyFactsFactory.defaultRequest(), profit: -2 };
    const companyFacts = CompanyFactsCreateRequestBodySchema.parse(json);
    expect(companyFacts).toEqual(json);
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
    let json: any;
    beforeEach(() => {
      json = { ...CompanyFactsFactory.defaultRequest() };
    });

    it('financialAssetsAndCashBalance', () => {
      delete json.financialAssetsAndCashBalance;
      const companyFactsPatchRequestBody =
        CompanyFactsPatchRequestBodySchema.parse(json);
      expect(
        companyFactsPatchRequestBody.financialAssetsAndCashBalance
      ).toBeUndefined();
    });

    it('profit', () => {
      delete json.profit;
      const companyFactsPatchRequestBody =
        CompanyFactsPatchRequestBodySchema.parse(json);

      expect(companyFactsPatchRequestBody.profit).toBeUndefined();
    });

    it('numberOfEmployees', () => {
      delete json.numberOfEmployees;
      const companyFactsPatchRequestBody =
        CompanyFactsPatchRequestBodySchema.parse(json);
      expect(companyFactsPatchRequestBody.numberOfEmployees).toBeUndefined();
    });

    it('hasCanteen', () => {
      delete json.hasCanteen;
      const companyFactsPatchRequestBody =
        CompanyFactsPatchRequestBodySchema.parse(json);
      expect(companyFactsPatchRequestBody.hasCanteen).toBeUndefined();
    });

    it('averageJourneyToWorkForStaffInKm', () => {
      delete json.averageJourneyToWorkForStaffInKm;
      const companyFactsPatchRequestBody =
        CompanyFactsPatchRequestBodySchema.parse(json);
      expect(
        companyFactsPatchRequestBody.averageJourneyToWorkForStaffInKm
      ).toBeUndefined();
    });

    it('isB2B', () => {
      delete json.isB2B;
      const companyFactsPatchRequestBody =
        CompanyFactsPatchRequestBodySchema.parse(json);
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
    const json: any = CompanyFactsFactory.defaultResponse();
    delete json.hasCanteen;
    const result = CompanyFactsResponseBodySchema.parse(json);
    expect(result).toEqual(json);
  });

  it('parse from json with negative profit', () => {
    const json = { ...CompanyFactsFactory.defaultResponse(), profit: -3 };
    const companyFactsResponse = CompanyFactsResponseBodySchema.parse(json);
    expect(companyFactsResponse).toEqual(json);
  });

  it('parse from json with missing countryCode for main origin of other suppliers', () => {
    const json: any = CompanyFactsFactory.defaultResponse();
    delete json.mainOriginOfOtherSuppliers.countryCode;
    const result = CompanyFactsResponseBodySchema.parse(json);
    expect(result).toEqual(json);
  });
});
