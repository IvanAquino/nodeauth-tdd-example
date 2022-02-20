const bcrypt = require('bcryptjs');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {

  beforeEach(async () => {
    await truncate();
  });


  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'Ivan',
      email: 'ivan@mail.com',
      password: '123123',
    });

    expect(
      bcrypt.compareSync('123123', user.password_hash)
    ).toBe(true);
  });

});
