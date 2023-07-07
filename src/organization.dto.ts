import { z } from 'zod';

export const OrganizationRequestSchema = z.object({
  address: z.object({
    city: z.string(),
    houseNumber: z.string(),
    street: z.string(),
    zip: z.string(),
  }),
});

export const OrganizationResponseSchema = OrganizationRequestSchema.extend({
  id: z.number(),
});

export const OrganizationItemsResponseSchema = z
  .object({ id: z.number() })
  .array();
