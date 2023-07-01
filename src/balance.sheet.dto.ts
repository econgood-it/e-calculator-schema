import { BalanceSheetType, BalanceSheetVersion } from './shared.schemas';
import { z } from 'zod';
import {
  CompanyFactsCreateRequestBodySchema,
  CompanyFactsPatchRequestBodySchema,
  CompanyFactsResponseBodySchema,
} from './company.facts.dto';
import {
  RatingRequestBodySchema,
  RatingResponseBodySchema,
} from './rating.dto';
import { StakeholderWeightSchema } from './stakeholder.weight.dto';

export const BalanceSheetCreateRequestBodySchema = z.object({
  type: z.nativeEnum(BalanceSheetType),
  version: z.nativeEnum(BalanceSheetVersion),
  companyFacts: CompanyFactsCreateRequestBodySchema.default({}),
  ratings: RatingRequestBodySchema.array().default([]),
  stakeholderWeights: StakeholderWeightSchema.array().default([]),
});

export const BalanceSheetPatchRequestBodySchema = z.object({
  companyFacts: CompanyFactsPatchRequestBodySchema.optional(),
  ratings: RatingRequestBodySchema.array().default([]),
  stakeholderWeights: StakeholderWeightSchema.array().optional(),
});

export const BalanceSheetResponseBodySchema = z.object({
  id: z.number().optional(),
  type: z.nativeEnum(BalanceSheetType),
  version: z.nativeEnum(BalanceSheetVersion),
  ratings: RatingResponseBodySchema.array(),
  companyFacts: CompanyFactsResponseBodySchema,
  stakeholderWeights: StakeholderWeightSchema.array(),
});

export const BalanceSheetItemResponseSchema = z.object({
  id: z.number(),
});

export const BalanceSheetItemsResponseSchema =
  BalanceSheetItemResponseSchema.array();
