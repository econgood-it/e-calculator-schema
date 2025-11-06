import { z } from 'zod';
import { isNonEmptyString } from './shared.schemas';

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

export const OrganizationItemsResponseSchema = z
  .object({ id: z.number(), name: isNonEmptyString })
  .array();
