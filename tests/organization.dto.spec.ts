import {
  OrganizationItemsResponseSchema,
  OrganizationRequestSchema,
  OrganizationResponseSchema,
} from '../src/organization.dto';

describe('OrganizationRequestSchema', () => {
  const jsonConst = {
    address: {
      street: 'Example street',
      houseNumber: '28a',
      zip: '999999',
      city: 'Example city',
    },
  };

  it('parse from json', () => {
    const organization = OrganizationRequestSchema.parse(jsonConst);
    expect(organization).toMatchObject(jsonConst);
  });
});

describe('OrganizationResponseSchema', () => {
  const jsonConst = {
    id: 9,
    address: {
      street: 'Example street',
      houseNumber: '28a',
      zip: '999999',
      city: 'Example city',
    },
  };

  it('parse from json', () => {
    const organization = OrganizationResponseSchema.parse(jsonConst);
    expect(organization).toMatchObject(jsonConst);
  });
});

describe('OrganizationItemsResponseSchema', () => {
  it('parse from json', () => {
    const json = [{ id: 3 }, { id: 4 }];
    const organization = OrganizationItemsResponseSchema.parse(json);
    expect(organization).toMatchObject(json);
  });
});
