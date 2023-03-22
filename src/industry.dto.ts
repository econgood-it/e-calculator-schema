import { z } from 'zod';

export const IndustryResponseBodySchema = z.object({
  industryCode: z.string(),
  industryName: z.string(),
});
