import { z } from 'zod';
import { BalanceSheetType, BalanceSheetVersion } from './shared.schemas';

const GroupSchema = z.object({
  shortName: z.string(),
  name: z.string(),
});

export const WorkbookResponseBodySchema = z.object({
  version: z.nativeEnum(BalanceSheetVersion),
  type: z.nativeEnum(BalanceSheetType),
  groups: GroupSchema.array(),
});
