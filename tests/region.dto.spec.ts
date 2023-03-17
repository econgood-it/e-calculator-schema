import { RegionResponseBodySchema } from '../src/region.dto';

describe('Region DTO', () => {
  it('should be created from region entity', () => {
    const region = {
      pppIndex: 3.4,
      countryCode: 'DEU',
      countryName: 'Germany',
      ituc: 3,
    };

    const regionDTO = RegionResponseBodySchema.parse(region);
    expect(regionDTO).toMatchObject({
      countryCode: 'DEU',
      countryName: 'Germany',
    });
  });
});
