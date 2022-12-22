import { github_id, User } from '../entities/User'

export abstract class UsersRepository {
  abstract register(code: string): Promise<{token: string, user: User}>
  abstract findByGithubID(id: github_id): Promise<User | null>
}
