import { AuthDto } from 'src/auth/dto';
import { Tokens } from 'src/auth/types';

const tokenStub = (): Tokens => {
  return {
    access_token: 'accessTokenStub',
    refresh_token: 'refreshTokenStub',
  };
};

const authDtoStub = (): AuthDto => {
  return {
    email: 'test1234@gmail.com',
    password: '12345',
  };
};
export { tokenStub, authDtoStub };
