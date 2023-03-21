import { z } from 'zod';

export const isCountryCode = z.string().min(3).max(3);
export const isIndustryCode = z.string().min(1).max(4);
export enum BalanceSheetType {
  Compact = 'Compact',
  Full = 'Full',
}

export enum BalanceSheetVersion {
  // eslint-disable-next-line camelcase
  v5_0_4 = '5.04',
  // eslint-disable-next-line camelcase
  v5_0_5 = '5.05',
  // eslint-disable-next-line camelcase
  v5_0_6 = '5.06',
  // eslint-disable-next-line camelcase
  v5_0_7 = '5.07',
  // eslint-disable-next-line camelcase
  v5_0_8 = '5.08',
}
