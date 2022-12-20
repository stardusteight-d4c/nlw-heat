import { User } from "../entities/User";
import { UsersRepository } from "../repositories/users-repository";

export interface FindUserRequest {
  id: string;
}

export interface FindUserResponse {
  user: User;
}

export class FindUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: FindUserRequest): Promise<FindUserResponse | null> {
    const id = request.id;

    const user = await this.usersRepository.findById(id);

    if (!user) {
      return null;
    }

    return { user };
  }
}
