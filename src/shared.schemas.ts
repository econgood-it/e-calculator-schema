import { z } from 'zod';

export const isCountryCode = z.string().min(3).max(3);
export const isIndustryCode = z.string().min(1).max(4);
