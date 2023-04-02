import { z } from 'zod';

export const CompanyProfileRequestSchema = z.object({
  address: z.object({
    city: z.string(),
    houseNumber: z.string(),
    street: z.string(),
    zip: z.string(),
  }),
});
