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
});
