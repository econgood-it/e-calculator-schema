import { z } from 'zod';
import { isCountryCode, isIndustryCode } from './shared.schemas';

const isNumberCustomError = z.number({
  invalid_type_error: 'Number expected',
  required_error: 'Number expected',
});

const isNumberWithDefaultZero = isNumberCustomError.default(0);

const isPositiveNumber = isNumberCustomError
  .nonnegative('Number should be positive')
  .default(0);

const isPercentage = z
  .number({
    invalid_type_error: 'Percentage expected',
    required_error: 'Percentage expected',
  })
  .min(0, 'Percentage should be between 0 and 100')
  .max(100, 'Percentage should be between 0 and 100');

const SupplyFractionRequestBodySchema = z.object({
  countryCode: isCountryCode.optional(),
  industryCode: isIndustryCode.optional(),
  costs: isPositiveNumber,
});

const EmployeesFractionRequestBodySchema = z.object({
  countryCode: isCountryCode.optional(),
  percentage: isPercentage,
});

const IndustrySectorRequestBodySchema = z.object({
  industryCode: isIndustryCode.optional(),
  amountOfTotalTurnover: isPercentage,
  description: z.string().default(''),
});

const CompanyFactsRequestBodySchema = z.object({
  totalPurchaseFromSuppliers: isPositiveNumber,
  totalStaffCosts: isPositiveNumber,
  profit: isPositiveNumber,
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
  supplyFractions: SupplyFractionRequestBodySchema.array().default([]),
  employeesFractions: EmployeesFractionRequestBodySchema.array().default([]),
  industrySectors: IndustrySectorRequestBodySchema.array().default([]),
  mainOriginOfOtherSuppliers: isCountryCode.optional(),
});

export const CompanyFactsCreateRequestBodySchema =
  CompanyFactsRequestBodySchema;

export const CompanyFactsPatchRequestBodySchema =
  CompanyFactsRequestBodySchema.partial();

export type CompanyFactsPatchRequestBody = z.infer<
  typeof CompanyFactsPatchRequestBodySchema
>;

export const CompanyFactsResponseBodySchema = z.object({
  totalPurchaseFromSuppliers: isPositiveNumber,
  totalStaffCosts: isPositiveNumber,
  profit: isPositiveNumber,
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
  supplyFractions: SupplyFractionRequestBodySchema.array(),
  employeesFractions: EmployeesFractionRequestBodySchema.array(),
  industrySectors: IndustrySectorRequestBodySchema.array(),
  mainOriginOfOtherSuppliers: z.object({
    countryCode: isCountryCode.optional(),
    costs: z.number(),
  }),
});

export type CompanyFactsResponseBody = z.infer<
  typeof CompanyFactsResponseBodySchema
>;
