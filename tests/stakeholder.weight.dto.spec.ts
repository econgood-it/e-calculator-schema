import { StakeholderWeightSchema } from '../src/stakeholder.weight.dto';

describe('StakeholderWeightRequestSchema', () => {
  it('should be parsed from json', () => {
    const jsObject = { shortName: 'A', weight: 0.5 };
    const stakeholderWeight = StakeholderWeightSchema.parse(jsObject);
    expect(stakeholderWeight).toEqual(jsObject);
  });

  it('should fail on wrong weight', () => {
    const jsObject = { shortName: 'A', weight: 3 };
    const result = StakeholderWeightSchema.safeParse(jsObject);
    expect(result.success).toBeFalsy();
    expect(!result.success && result.error.errors[0].message).toBe(
      'Weight has to be one of the following values 0,0.5,1,1.5,2'
    );
  });

  it('should fail on wrong shortName', () => {
    const jsObject = { shortName: 'F', weight: 2 };
    const result = StakeholderWeightSchema.safeParse(jsObject);
    expect(result.success).toBeFalsy();
    expect(!result.success && result.error.errors[0].message).toBe(
      'Short name has to be one of the following values A,B,C,D,E'
    );
  });
});
