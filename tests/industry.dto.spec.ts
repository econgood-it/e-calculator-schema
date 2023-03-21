import { IndustryResponseBodySchema } from '../src/industry.dto';

describe('Industry DTO', () => {
  it('should be created from json', () => {
    const json = {
      industryCode: 'A',
      industryName: 'Agriculture',
    };
    expect(IndustryResponseBodySchema.parse(json)).toMatchObject({
      industryCode: 'A',
      industryName: 'Agriculture',
    });
  });
});
