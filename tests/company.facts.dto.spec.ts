import { CompanyFactsPatchRequestBodySchema } from '../src/company.facts.dto';

describe('CompanyFactsPatchRequestBodySchema', () => {
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

  describe('parse json where value is missing for field', () => {
    let json: any;
    beforeEach(() => {
      json = jsonConst;
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
