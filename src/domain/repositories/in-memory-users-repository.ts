import { User } from "../entities/User";
import { UsersRepository } from "./users-repository";

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [];

  async create(user: User) {
    this.users.push(user);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkdhYnJpZWwgU2VuYSIsImlhdCI6MTUxNjIzOTAyMn0.UPlg-dEc5o1r8hlFM_YzK87kwRyypgWjRb5X_uXIm5g";
    return token;
  }
}
