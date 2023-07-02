import { z } from 'zod';
import { isWeight } from './shared.schemas';

const STAKEHOLDER_NAMES = ['A', 'B', 'C', 'D', 'E'];
const isStakeholderShortName = z
  .string()
  .refine((v) => STAKEHOLDER_NAMES.some((w) => w === v), {
    message: `Short name has to be one of the following values ${STAKEHOLDER_NAMES}`,
  });

export const StakeholderWeightSchema = z.object({
  shortName: isStakeholderShortName,
  weight: isWeight,
});
