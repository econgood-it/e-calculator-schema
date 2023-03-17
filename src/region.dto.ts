import { z } from 'zod';

export const RegionResponseBodySchema = z.object({
  countryCode: z.string(),
  countryName: z.string(),
});

export type RegionResponse = z.infer<typeof RegionResponseBodySchema>;
