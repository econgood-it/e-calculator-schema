import { z } from 'zod';
import { isCountryCode, isIndustryCode } from './shared.schemas';

const isPositiveNumber = z
  .number({
    invalid_type_error: 'Number expected',
    required_error: 'Number expected',
  })
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
  incomeFromFinancialInvestments: z.number().default(0),
  additionsToFixedAssets: z.number().default(0),
  turnover: isPositiveNumber,
  totalAssets: isPositiveNumber,
  financialAssetsAndCashBalance: isPositiveNumber,
  numberOfEmployees: isPositiveNumber,
  hasCanteen: z.oboolean(),
  averageJourneyToWorkForStaffInKm: z.number().min(0).max(30),
  isB2B: z.boolean().default(false),
  supplyFractions: SupplyFractionRequestBodySchema.array().default([]),
  employeesFractions: EmployeesFractionRequestBodySchema.array().default([]),
  industrySectors: IndustrySectorRequestBodySchema.array().default([]),
  mainOriginOfOtherSuppliers: isCountryCode.optional(),
});

export const CompanyFactsCreateRequestBody = CompanyFactsRequestBodySchema;

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
  incomeFromFinancialInvestments: isPositiveNumber,
  additionsToFixedAssets: isPositiveNumber,
  turnover: isPositiveNumber,
  totalAssets: isPositiveNumber,
  financialAssetsAndCashBalance: isPositiveNumber,
  numberOfEmployees: isPositiveNumber,
  hasCanteen: z.oboolean(),
  averageJourneyToWorkForStaffInKm: z.number(),
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
