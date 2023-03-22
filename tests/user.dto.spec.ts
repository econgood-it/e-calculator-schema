import { UserRequestBodySchema } from '../src/user.schema';

describe('UserDTO', () => {
  it('should be created from json', () => {
    const json = {
      email: 'email@example.com',
      password: 'amazingsecreturieojqfiejqiofjeqiojfoiqwej',
    };
    const result = UserRequestBodySchema.parse(json);
    expect(result).toMatchObject({ ...json });
  });
});
