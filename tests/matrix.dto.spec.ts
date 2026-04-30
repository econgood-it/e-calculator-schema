import { MatrixBodySchema } from '../src/matrix.dto';

describe('MatrixBodySchema', () => {
  const ratingJson = {
    shortName: 'A1',
    name: 'Human dignity in the supply chain',
    points: 9,
    maxPoints: 40,
    percentageReached: 30,
    notApplicable: true,
  };

  const json = {
    ratings: [ratingJson],
    totalPoints: 600,
  };

  it('parse from json', () => {
    const matrixBody = MatrixBodySchema.parse(json);
    expect(matrixBody).toMatchObject(json);
  });

  it('fails if percentage is invalid', () => {
    const result = MatrixBodySchema.safeParse({
      ...json,
      ratings: [{ ...ratingJson, percentageReached: 101 }],
    });
    expect(result.success).toBeFalsy();
    expect(!result.success && result.error.errors[0].message).toBe(
      'Percentage should be between 0 and 100'
    );
  });

  it('fails if maxPoints is negative', () => {
    const result = MatrixBodySchema.safeParse({
      ...json,
      ratings: [{ ...ratingJson, maxPoints: -1 }],
    });
    expect(result.success).toBeFalsy();
    expect(!result.success && result.error.errors[0].message).toBe(
      'Number should be positive'
    );
  });
});
