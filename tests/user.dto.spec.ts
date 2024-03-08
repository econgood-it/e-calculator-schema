import {
  UserInvitationResponseSchema,
  UserRequestBodySchema,
} from '../src/user.schema';

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

describe('UserInvitationResponseSchema', () => {
  it('should be created from json', () => {
    const json = [
      { id: 1, name: 'Orga1' },
      { id: 2, name: 'Orga2' },
    ];
    const result = UserInvitationResponseSchema.array().parse(json);
    expect(result).toMatchObject(json);
  });
});
