import { GeneralInformationSchema } from '../src/general.information.dto';

describe('GeneralInformation', () => {
  it('should parse json', () => {
    const json = {
      contactPerson: {
        name: 'John Doe',
        email: 'john@example.com',
      },
      company: {
        name: 'ECG GmbH',
      },
      period: {
        start: new Date('2021-01-01').toISOString(),
        end: new Date('2021-12-31').toISOString(),
      },
    };
    const parsed = GeneralInformationSchema.parse(json);
    expect(parsed).toEqual(json);
  });
});
