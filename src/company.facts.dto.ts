import { z } from 'zod';
import {
  isCountryCode,
  isIndustryCode,
  isNumberWithDefaultZero,
  isPercentage,
  isPositiveNumber,
  isPositiveNumberNotZero,
} from './shared.schemas';

function isSumGreaterThan(array: number[], value: number): boolean {
  // Calculate the sum of the array
  const sum = array.reduce((acc, curr) => acc + curr, 0);

  // Check if the sum is greater than the specified value
  return sum > value;
}

const sumOfPercentagesSmallerEqual100Msg =
  'The sum of all percentage values should not be greater than 100.';

export const SupplyFractionSchema = z
  .object({
    countryCode: isCountryCode.optional(),
    industryCode: isIndustryCode.optional(),
    costs: isPositiveNumberNotZero,
  })
  .array();

export const EmployeesFractionSchema = z
  .object({
    countryCode: isCountryCode.optional(),
    percentage: isPercentage,
  })
  .array()
  .refine(
    (efs) =>
      !isSumGreaterThan(
        efs.map((ef) => ef.percentage),
        100
      ),
    {
      message: sumOfPercentagesSmallerEqual100Msg,
    }
  );

export const IndustrySectorSchema = z
  .object({
    industryCode: isIndustryCode.optional(),
    amountOfTotalTurnover: isPercentage,
    description: z.string().default(''),
  })
  .array()
  .refine(
    (is) =>
      !isSumGreaterThan(
        is.map((is) => is.amountOfTotalTurnover),
        100
      ),
    {
      message: sumOfPercentagesSmallerEqual100Msg,
    }
  );

const CompanyFactsRequestBodySchema = z.object({
  totalPurchaseFromSuppliers: isPositiveNumber,
  totalStaffCosts: isPositiveNumber,
  profit: isNumberWithDefaultZero,
  financialCosts: isPositiveNumber,
  incomeFromFinancialInvestments: isNumberWithDefaultZero,
  additionsToFixedAssets: isNumberWithDefaultZero,
  turnover: isPositiveNumber,
  totalAssets: isPositiveNumber,
  financialAssetsAndCashBalance: isPositiveNumber,
  numberOfEmployees: isPositiveNumber,
  hasCanteen: z.oboolean(),
  averageJourneyToWorkForStaffInKm: isPositiveNumber,
  isB2B: z.boolean().default(false),
  supplyFractions: SupplyFractionSchema.default([]),
  employeesFractions: EmployeesFractionSchema.default([]),
  industrySectors: IndustrySectorSchema.default([]),
  mainOriginOfOtherSuppliers: isCountryCode.optional(),
});

export const CompanyFactsCreateRequestBodySchema =
  CompanyFactsRequestBodySchema;

export const CompanyFactsPatchRequestBodySchema =
  CompanyFactsRequestBodySchema.partial();

export const CompanyFactsResponseBodySchema = z.object({
  totalPurchaseFromSuppliers: isPositiveNumber,
  totalStaffCosts: isPositiveNumber,
  profit: isNumberWithDefaultZero,
  financialCosts: isPositiveNumber,
  incomeFromFinancialInvestments: isNumberWithDefaultZero,
  additionsToFixedAssets: isNumberWithDefaultZero,
  turnover: isPositiveNumber,
  totalAssets: isPositiveNumber,
  financialAssetsAndCashBalance: isPositiveNumber,
  numberOfEmployees: isPositiveNumber,
  hasCanteen: z.oboolean(),
  averageJourneyToWorkForStaffInKm: isPositiveNumber,
  isB2B: z.boolean(),
  supplyFractions: SupplyFractionSchema,
  employeesFractions: EmployeesFractionSchema,
  industrySectors: IndustrySectorSchema,
  mainOriginOfOtherSuppliers: z.object({
    countryCode: isCountryCode.optional(),
    costs: z.number(),
  }),
});
