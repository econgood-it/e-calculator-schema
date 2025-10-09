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
import { GeneralInformationSchema } from './general.information.dto';

export const BalanceSheetCreateRequestBodySchema = z.object({
  type: z.nativeEnum(BalanceSheetType),
  version: z.nativeEnum(BalanceSheetVersion),
  companyFacts: CompanyFactsCreateRequestBodySchema.default({}),
  ratings: RatingRequestBodySchema.array().default([]),
  stakeholderWeights: StakeholderWeightSchema.array().default([]),
  generalInformation: GeneralInformationSchema,
});

export const BalanceSheetPatchRequestBodySchema = z.object({
  companyFacts: CompanyFactsPatchRequestBodySchema.optional(),
  ratings: RatingRequestBodySchema.array().default([]),
  stakeholderWeights: StakeholderWeightSchema.array().optional(),
  generalInformation: GeneralInformationSchema.optional(),
});

export const BalanceSheetResponseBodySchema = z.object({
  id: z.number(),
  type: z.nativeEnum(BalanceSheetType),
  version: z.nativeEnum(BalanceSheetVersion),
  ratings: RatingResponseBodySchema.array(),
  companyFacts: CompanyFactsResponseBodySchema,
  generalInformation: GeneralInformationSchema,
  stakeholderWeights: StakeholderWeightSchema.array(),
});

export const BalanceSheetItemResponseSchema = z.object({
  id: z.number(),
  version: z.nativeEnum(BalanceSheetVersion),
  type: z.nativeEnum(BalanceSheetType),
});

export const BalanceSheetItemsResponseSchema =
  BalanceSheetItemResponseSchema.array();
