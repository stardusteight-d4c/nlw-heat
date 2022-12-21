import { github_id, User } from "../entities/User";
import { UsersRepository } from "../repositories/users-repository";

export interface CreateUserRequest {
  name: string;
  username: string;
  avatar_url: string;
  github_id: github_id;
}

export interface CreateUserResponse {
  user: User;
  token: string;
}

export class CreateUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const user = new User(request);

    const token = await this.usersRepository.create(user);

    return { token, user };
  }
}
