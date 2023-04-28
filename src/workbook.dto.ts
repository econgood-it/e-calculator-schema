import { z } from 'zod';

export const SectionSchema = z.object({
  shortName: z.string(),
  title: z.string(),
});
export const WorkbookResponseBodySchema = z.object({
  sections: SectionSchema.array(),
});
