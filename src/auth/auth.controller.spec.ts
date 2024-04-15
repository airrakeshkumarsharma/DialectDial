import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";

describe("AuthController", () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("login", () => {
    it("should call authService.login and return the result", async () => {
      const user = { username: "john", userId: 1 }; // Mock user object
      const expectedResult = { access_token: "34343" }; // Mock expected result

      jest.spyOn(authService, "login").mockResolvedValue(expectedResult);

      const result = await controller.login({ user });

      expect(authService.login).toHaveBeenCalledWith(user);
      expect(Object.keys(result)).toEqual(Object.keys(expectedResult));
    });
  });
});
