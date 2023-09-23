import { IUser } from "@/interfaces/User";
import { IUserService } from "@/interfaces/UserService";

export class AuthService {
  constructor(private userService: IUserService) {
    this.userService = userService;
  }

  async signIn(user: IUser) {
    if (user.email) {
      try {
        await this.userService.getUnique(user.email);
        return true;
      } catch (error: any) {
        if (error.statusCode === 404) {
          return this.userService
            .create({ name: user.name, email: user.email })
            .then(() => true)
            .catch(() => {
              console.log('Erro interno, tente novamente...');
              return '/signin';
            });
        } else {
          console.error(error);
          return '/signin';
        }
      }
    }
    return '/signin';
  }
}