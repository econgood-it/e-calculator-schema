import { RegionResponseBodySchema } from '../src/region.dto';

describe('Region DTO', () => {
  it('should be created from region entity', () => {
    const regionJson = {
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
