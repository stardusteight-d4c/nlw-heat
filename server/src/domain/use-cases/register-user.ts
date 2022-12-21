import { github_id, User } from "../entities/User";
import { UsersRepository } from "../repositories/users-repository";

export interface RegisterUserRequest {
  name: string;
  username: string;
  avatar_url: string;
  github_id: github_id;
}

export interface RegisterUserResponse {
  user: User;
  token: string;
}

export class RegisterUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: RegisterUserRequest): Promise<RegisterUserResponse> {
    const user = new User(request);

    const token = await this.usersRepository.register(user);

    return { token, user };
  }
}
