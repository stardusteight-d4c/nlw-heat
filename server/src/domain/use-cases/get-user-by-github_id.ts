import { github_id, User } from "../entities/User";
import { UsersRepository } from "../repositories/users-repository";

export interface GetUserByGithubIDRequest {
  id: github_id;
}

export interface GetUserByGithubIDResponse {
  user: User;
}

export class GetUserByGithubID {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: GetUserByGithubIDRequest): Promise<GetUserByGithubIDResponse | null> {
    const id = request.id;

    const user = await this.usersRepository.findByGithubID(id);

    if (!user) {
      return null;
    }

    return { user };
  }
}
