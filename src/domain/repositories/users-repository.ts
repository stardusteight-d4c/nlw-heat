import { User } from '../entities/User'

type token = string

export abstract class UsersRepository {
  abstract create(user: User): Promise<token>
}
