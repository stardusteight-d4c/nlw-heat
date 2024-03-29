import { github_id, User } from "../../domain/entities/User";
import { makeUserObject } from "../../domain/factories/users-factory";
import { UsersRepository } from "../../domain/repositories/users-repository";

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [];

  async register(code: string) {
    const user = new User(makeUserObject());

    this.users.push(user);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkdhYnJpZWwgU2VuYSIsImlhdCI6MTUxNjIzOTAyMn0.UPlg-dEc5o1r8hlFM_YzK87kwRyypgWjRb5X_uXIm5g";

    return { token, user: user };
  }

  async findByGithubID(id: github_id): Promise<User | null> {
    const user = this.users.find((user) => user.github_id === id);

    return user ?? null;
  }
}
