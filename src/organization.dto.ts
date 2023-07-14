import { z } from 'zod';
const errorMsg = 'Must not be blank';
const isNonEmptyString = z
  .string({ required_error: errorMsg })
  .min(1, { message: errorMsg });
export const OrganizationRequestSchema = z.object({
  address: z.object({
    city: isNonEmptyString,
    houseNumber: isNonEmptyString,
    street: isNonEmptyString,
    zip: isNonEmptyString,
  }),
});

export const OrganizationResponseSchema = OrganizationRequestSchema.extend({
  id: z.number(),
});

export const OrganizationItemsResponseSchema = z
  .object({ id: z.number() })
  .array();
