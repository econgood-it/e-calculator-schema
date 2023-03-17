import {
  RatingRequestBodySchema,
  RatingResponseBodySchema,
  RatingType,
} from '../src/rating.dto';

describe('RatingRequestBodySchema', () => {
  it('parse json as aspect', () => {
    const json = {
      shortName: 'A1.1',
      estimations: 5,
      weight: 1,
    };
    const rating = RatingRequestBodySchema.parse(json);
    expect(rating).toMatchObject({ ...json });
  });

  it('parse json as topic', () => {
    const json = {
      shortName: 'A1',
      estimations: 5,
      weight: 1,
    };
    const rating = RatingRequestBodySchema.parse(json);
    expect(rating).toMatchObject({ ...json });
  });

  it('parsing of json fails on invalid weight', () => {
    const json = {
      shortName: 'A1',
      estimations: 5,
      weight: 3,
    };
    const result = RatingRequestBodySchema.safeParse(json);
    expect(result.success).toBeFalsy();
    expect(!result.success && result.error.errors[0].message).toBe(
      'Weight has to be one of the following values 0,0.5,1,1.5,2'
    );
  });
});

describe('RatingResponseBodySchema', () => {
  it.each([{ estimations: 11 }, { estimations: -2 }])(
    'should fail for invalid estimations if aspect is positive ',
    ({ estimations }) => {
      const json = {
        shortName: 'A1',
        name: 'Human dignity in the supply chain',
        estimations: estimations,
        isPositive: true,
        type: RatingType.aspect,
        weight: 0,
        points: 0,
        maxPoints: 0,
      };
      const expectedError = {
        code: 'custom',
        message: 'Number should be between 0 and 10',
        path: ['estimations'],
      };
      const result = RatingResponseBodySchema.safeParse(json);
      expect(result.success).toBeFalsy();
      console.log(!result.success && result.error.errors);
      expect(!result.success && result.error.errors[0]).toMatchObject(
        expectedError
      );
    }
  );

  it.each([{ estimations: 1 }, { estimations: -201 }])(
    'should fail for invalid estimations if aspect is negative ',
    ({ estimations }) => {
      const json = {
        shortName: 'A1',
        name: 'Human dignity in the supply chain',
        estimations: estimations,
        isPositive: false,
        type: RatingType.aspect,
        weight: 0,
        points: 0,
        maxPoints: 0,
      };
      const expectedError = {
        code: 'custom',
        message: 'Number should be between -200 and 0',
        path: ['estimations'],
      };
      const result = RatingResponseBodySchema.safeParse(json);
      expect(result.success).toBeFalsy();
      expect(!result.success && result.error.errors[0]).toStrictEqual(
        expectedError
      );
    }
  );

  it.each([{ estimations: 1 }, { estimations: -201 }, { estimations: 11 }])(
    'should parse rating if rating type is topic ',
    ({ estimations }) => {
      const json = {
        shortName: 'A1',
        name: 'Human dignity in the supply chain',
        estimations: estimations,
        isPositive: false,
        type: RatingType.topic,
        weight: 0,
        points: 0,
        maxPoints: 0,
      };
      const rating = RatingResponseBodySchema.parse(json);
      expect(rating).toBe(rating);
    }
  );
});
