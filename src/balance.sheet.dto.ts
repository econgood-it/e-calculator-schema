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

export const BalanceSheetCreateRequestBodySchema = z.object({
  type: z.nativeEnum(BalanceSheetType),
  version: z.nativeEnum(BalanceSheetVersion),
  companyFacts: CompanyFactsCreateRequestBodySchema.optional().default({}),
  ratings: RatingRequestBodySchema.optional().array().default([]),
});

export const BalanceSheetPatchRequestBodySchema = z.object({
  companyFacts: CompanyFactsPatchRequestBodySchema.optional(),
  ratings: RatingRequestBodySchema.array().default([]),
});

export type BalanceSheetPatchRequestBody = z.infer<
  typeof BalanceSheetPatchRequestBodySchema
>;

export const BalanceSheetResponseBodySchema = z.object({
  id: z.number().optional(),
  type: z.nativeEnum(BalanceSheetType),
  version: z.nativeEnum(BalanceSheetVersion),
  ratings: RatingResponseBodySchema.array(),
  companyFacts: CompanyFactsResponseBodySchema,
});

export type BalanceSheetResponseBody = z.infer<
  typeof BalanceSheetResponseBodySchema
>;

export const BalanceSheetIdsResponseSchema = z
  .object({
    id: z.number(),
  })
  .array();
