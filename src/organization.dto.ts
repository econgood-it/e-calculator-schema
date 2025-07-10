import { z } from 'zod';
const errorMsg = 'Must not be blank';
const isNonEmptyString = z
  .string({ required_error: errorMsg })
  .min(1, { message: errorMsg });

export const OrganizationRequestSchema = z.object({
  name: isNonEmptyString,
  address: z.object({
    city: isNonEmptyString,
    houseNumber: isNonEmptyString,
    street: isNonEmptyString,
    zip: isNonEmptyString,
  }),
});

export const OrganizationResponseSchema = OrganizationRequestSchema.extend({
  id: z.number(),
  invitations: z.string().email().array(),
});

export const OrganizationItemResponseSchema = z.object({
  id: z.number(),
  name: isNonEmptyString,
});

export const OrganizationItemsResponseSchema = z
  .object({ id: z.number(), name: isNonEmptyString })
  .array();
