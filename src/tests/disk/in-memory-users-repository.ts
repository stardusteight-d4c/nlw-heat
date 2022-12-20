import { User } from "../../domain/entities/User";
import { UsersRepository } from "../../domain/repositories/users-repository";

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [];

  async create(user: User) {
    this.users.push(user);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkdhYnJpZWwgU2VuYSIsImlhdCI6MTUxNjIzOTAyMn0.UPlg-dEc5o1r8hlFM_YzK87kwRyypgWjRb5X_uXIm5g";

    return token;
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);

    return !user ? null : user;
  }
}
