import { tokenStub } from '../test/stubs/auth.stub';

export const AuthService = jest.fn().mockReturnValue({
  signupLocal: jest.fn().mockResolvedValue(tokenStub()),
  signinLocal: jest.fn().mockResolvedValue(tokenStub()),
  logout: jest.fn().mockResolvedValue({}),
  refreshToken: jest.fn().mockResolvedValue(tokenStub()),
});
