import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import { Tokens } from '../types';
import { authDtoStub, tokenStub } from './stubs/auth.stub';

jest.mock('../auth.service');
describe('AuthCotroller', () => {
  let service: AuthService;
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();
    service = module.get<AuthService>(AuthService);
    controller = module.get<AuthController>(AuthController);
    jest.clearAllMocks();
  });

  describe('signupLocal', () => {
    describe('when signupLocal get called', () => {
      let token: Tokens;
      beforeEach(async () => {
        token = await controller.signupLocal(authDtoStub());
      });
      test('then it should call AuthService', () => {
        expect(service.signupLocal).toBeCalledWith(authDtoStub());
      });
      test('then it should return tokens', () => {
        expect(token).toEqual(tokenStub());
      });
    });
  });
  describe('signinLocal', () => {
    describe('when signinLocal get called', () => {
      let token: Tokens;
      beforeEach(async () => {
        token = await controller.signinLocal(authDtoStub());
      });
      test('then it should call AuthService', () => {
        expect(service.signinLocal).toBeCalledWith(authDtoStub());
      });
      test('then it should return tokens', () => {
        expect(token).toEqual(tokenStub());
      });
    });
  });
  describe('logout', () => {
    describe('when logout get called', () => {
      let user: object;
      beforeEach(async () => {
        user = await controller.logout('test');
      });
      test('then it should call AuthService', () => {
        expect(service.logout).toBeCalledWith('test');
      });
      test('then it should return empty object', () => {
        expect(user).toEqual({});
      });
    });
  });
  describe('refreshToken', () => {
    describe('when refreshToken get called', () => {
      let token: Tokens;
      beforeEach(async () => {
        token = await controller.refreshToken('test', 'refreshTokenStub');
      });
      test('then it should call AuthService', () => {
        expect(service.refreshToken).toBeCalledWith('test', 'refreshTokenStub');
      });
      test('then it should return tokens', () => {
        expect(token).toEqual(tokenStub());
      });
    });
  });
});
