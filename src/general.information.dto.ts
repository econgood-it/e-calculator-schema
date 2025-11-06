import { z } from 'zod';
import { isNonEmptyString } from './shared.schemas';

const CompanySchema = z.object({
  name: isNonEmptyString,
});

const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/;
const IsoDateString = z.string().regex(isoDateRegex, 'Invalid ISO date format');

const PeriodSchema = z.object({
  start: IsoDateString,
  end: IsoDateString,
});

const ContactPersonSchema = z.object({
  email: z.string().email(),
  name: isNonEmptyString,
});

export const GeneralInformationSchema = z.object({
  company: CompanySchema,
  contactPerson: ContactPersonSchema,
  period: PeriodSchema.optional(),
});
