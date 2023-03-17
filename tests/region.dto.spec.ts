import { RegionResponseBodySchema } from '../src/region.dto';
import { RegionResponse } from '../dist/region.dto';

describe('Region DTO', () => {
  it('should be created from region entity', () => {
    const regionJson: RegionResponse = {
      countryCode: 'DEU',
      countryName: 'Germany',
    };

    const regionDTO = RegionResponseBodySchema.parse(regionJson);
    expect(regionDTO).toMatchObject({
      countryCode: 'DEU',
      countryName: 'Germany',
    });
  });
});
