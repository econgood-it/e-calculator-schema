import { z } from 'zod';

export const isCountryCode = z.string().min(3).max(3);
export const isIndustryCode = z.string().min(1).max(4);
export enum BalanceSheetType {
  Compact = 'Compact',
  Full = 'Full',
}

export enum BalanceSheetVersion {
  v5_0_6 = '5.06',
  v5_0_8 = '5.08',
  v5_0_9 = '5.09',
  v5_1_0 = '5.10',
}

const isNumberCustomError = z.number({
  invalid_type_error: 'Number expected',
  required_error: 'Number expected',
});

export const WEIGHT_VALUES = [0, 0.5, 1, 1.5, 2];

export const isWeight = z
  .number()
  .refine((v) => WEIGHT_VALUES.some((w) => w === v), {
    message: `Weight has to be one of the following values ${WEIGHT_VALUES}`,
  });
export const isWeightOptional = isWeight.optional();

export const isNumberWithDefaultZero = isNumberCustomError.default(0);
export const isPositiveNumber = isNumberCustomError
  .nonnegative('Number should be positive')
  .default(0);
export const isPositiveNumberNotZero = isNumberCustomError
  .gt( 0, 'Number should be positive and greater than zero')
  .default(0);
export const isPercentage = z
  .number({
    invalid_type_error: 'Percentage expected',
    required_error: 'Percentage expected',
  })
  .min(0, 'Percentage should be between 0 and 100')
  .max(100, 'Percentage should be between 0 and 100');
