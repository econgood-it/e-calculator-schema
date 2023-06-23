import { z } from 'zod';
import {
  isCountryCode,
  isIndustryCode,
  isNumberWithDefaultZero,
  isPercentage,
  isPositiveNumber,
} from './shared.schemas';

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
  supplyFractions: SupplyFractionRequestBodySchema.array().default([]),
  employeesFractions: EmployeesFractionRequestBodySchema.array().default([]),
  industrySectors: IndustrySectorRequestBodySchema.array().default([]),
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
  supplyFractions: SupplyFractionRequestBodySchema.array(),
  employeesFractions: EmployeesFractionRequestBodySchema.array(),
  industrySectors: IndustrySectorRequestBodySchema.array(),
  mainOriginOfOtherSuppliers: z.object({
    countryCode: isCountryCode.optional(),
    costs: z.number(),
  }),
});
