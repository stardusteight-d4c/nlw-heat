import { github_id, User } from "../entities/User";
import { UsersRepository } from "../repositories/users-repository";

export interface RegisterUserRequest {
  code: string;
}

export interface RegisterUserResponse {
  user: User;
  token: string;
}

export class RegisterUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: RegisterUserRequest): Promise<RegisterUserResponse> {
    const { token, user } = await this.usersRepository.register(request.code);

    return { token, user };
  }
}
