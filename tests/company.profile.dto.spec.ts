import { CompanyProfileRequestSchema } from '../src/company.profile.dto';

describe('CompanyProfileRequestSchema', () => {
  const jsonConst = {
    address: {
      street: 'Example street',
      houseNumber: '28a',
      zip: '999999',
      city: 'Example city',
    },
  };

  it('parse from json', () => {
    const companyProfile = CompanyProfileRequestSchema.parse(jsonConst);
    expect(companyProfile).toMatchObject(jsonConst);
  });
});
