import { z } from 'zod';

export const IndustryResponseBodySchema = z.object({
  industryCode: z.string(),
  industryName: z.string(),
});

export type IndustryResponseBody = z.infer<typeof IndustryResponseBodySchema>;
