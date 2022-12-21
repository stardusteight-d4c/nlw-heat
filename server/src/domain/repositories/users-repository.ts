import { github_id, User } from '../entities/User'

type token = string

export abstract class UsersRepository {
  abstract register(user: User): Promise<token>
  abstract findByGithubID(id: github_id): Promise<User | null>
}
