import { describe, expect, it } from "vitest";
import { InMemoryUsersRepository } from "../../tests/disk/in-memory-users-repository";
import { User } from "../entities/User";
import { RegisterUser, RegisterUserResponse } from "./register-user";

describe("Register a user", () => {
  it("must be possible to register a user", () => {
    const usersRepository = new InMemoryUsersRepository();
    const registerUser = new RegisterUser(usersRepository);

    expect(
      registerUser
        .execute({code: 'aaa'})
        .then((data: RegisterUserResponse) => data),
    ).resolves.toBeTruthy()

    expect(
      registerUser
      .execute({code: 'aaa'})
        .then((data: RegisterUserResponse) => data.user),
    ).resolves.toBeInstanceOf(User);

    expect(
      registerUser
      .execute({code: 'aaa'})
        .then((data: RegisterUserResponse) => data.token),
    ).resolves.toBeTypeOf("string")
  });
});
