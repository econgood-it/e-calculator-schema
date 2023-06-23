import {
  CompanyFactsCreateRequestBodySchema,
  CompanyFactsPatchRequestBodySchema,
  CompanyFactsResponseBodySchema,
} from '../src/company.facts.dto';

const jsonConst = {
  totalPurchaseFromSuppliers: 1,
  totalStaffCosts: 2,
  profit: 3,
  financialCosts: 4,
  incomeFromFinancialInvestments: 5,
  additionsToFixedAssets: 6,
  turnover: 7,
  totalAssets: 8,
  financialAssetsAndCashBalance: 9,
  numberOfEmployees: 11,
  hasCanteen: true,
  averageJourneyToWorkForStaffInKm: 12,
  isB2B: true,
  supplyFractions: [],
  employeesFractions: [],
  industrySectors: [],
  mainOriginOfOtherSuppliers: 'DEU',
};

describe('CompanyFactsCreateRequestBodySchema', () => {
  it('should parse json with negative profit', () => {
    const json = { ...jsonConst, profit: -2 };
    const companyFacts = CompanyFactsCreateRequestBodySchema.parse(json);
    expect(companyFacts).toEqual(json);
  });
});

describe('CompanyFactsPatchRequestBodySchema', () => {
  it('parse from json', () => {
    const companyFactsPatchRequestBody =
      CompanyFactsPatchRequestBodySchema.parse(jsonConst);
    expect(companyFactsPatchRequestBody).toMatchObject(jsonConst);
  });

  it('allows negative values for incomeFromFinancialInvestments and additionsToFixedAssets', async () => {
    const result = CompanyFactsPatchRequestBodySchema.safeParse({
      incomeFromFinancialInvestments: -20,
      additionsToFixedAssets: -70,
    });
    expect(result.success).toBeTruthy();
  });

  it('allows negative values for profit', async () => {
    const json = { ...jsonConst, profit: -2 };
    const companyFacts = CompanyFactsPatchRequestBodySchema.parse(json);
    expect(companyFacts).toEqual(json);
  });

  describe('parse json where value is missing for field', () => {
    let json: any;
    beforeEach(() => {
      json = { ...jsonConst };
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
  const jsonConst = {
    totalPurchaseFromSuppliers: 1,
    totalStaffCosts: 2,
    profit: 3,
    financialCosts: 4,
    incomeFromFinancialInvestments: 5,
    additionsToFixedAssets: 6,
    turnover: 7,
    totalAssets: 8,
    financialAssetsAndCashBalance: 9,
    numberOfEmployees: 11,
    hasCanteen: true,
    averageJourneyToWorkForStaffInKm: 12,
    isB2B: true,
    supplyFractions: [],
    employeesFractions: [],
    industrySectors: [],
    mainOriginOfOtherSuppliers: {
      countryCode: 'DEU',
      costs: 23,
    },
  };

  it('parse from json', () => {
    const companyFactsResponse =
      CompanyFactsResponseBodySchema.parse(jsonConst);
    expect(companyFactsResponse).toMatchObject(jsonConst);
  });

  it('parse from json with missing hasCanteen', () => {
    const json: any = jsonConst;
    delete json.hasCanteen;
    const result = CompanyFactsResponseBodySchema.parse(json);
    expect(result).toEqual(json);
  });

  it('parse from json with negative profit', () => {
    const json = { ...jsonConst, profit: -3 };
    const companyFactsResponse = CompanyFactsResponseBodySchema.parse(json);
    expect(companyFactsResponse).toEqual(json);
  });

  it('parse from json with missing countryCode for main origin of other suppliers', () => {
    const json: any = jsonConst;
    delete json.mainOriginOfOtherSuppliers.countryCode;
    const result = CompanyFactsResponseBodySchema.parse(json);
    expect(result).toEqual(json);
  });
});
