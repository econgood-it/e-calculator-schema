import { z } from 'zod';
export const WEIGHT_VALUES = [0, 0.5, 1, 1.5, 2];

export const RatingRequestBodySchema = z.object({
  shortName: z.string(),
  weight: z
    .number()
    .refine((v) => WEIGHT_VALUES.some((w) => w === v), {
      message: `Weight has to be one of the following values ${WEIGHT_VALUES}`,
    })
    .optional(),
  estimations: z.number().min(-200).max(10).optional(),
});

export enum RatingType {
  topic = 'topic',
  aspect = 'aspect',
}
export const RatingResponseBodySchema = z
  .object({
    shortName: z.string(),
    name: z.string(),
    type: z.nativeEnum(RatingType),
    isPositive: z.boolean(),
    estimations: z.number({
      invalid_type_error: 'Number expected',
      required_error: 'Number expected',
    }),
    weight: z.number(),
    points: z.number(),
    maxPoints: z.number(),
  })
  .refine(
    (data) => {
      const isValid =
        data.type === RatingType.topic ||
        (data.isPositive &&
          z.number().min(0).max(10).safeParse(data.estimations).success) ||
        (!data.isPositive &&
          z.number().min(-200).max(0).safeParse(data.estimations).success);
      return isValid;
    },
    (data) => ({
      message: `Number should be between ${
        data.isPositive ? '0 and 10' : '-200 and 0'
      }`,
      path: [`estimations`, data.shortName],
    })
  );
