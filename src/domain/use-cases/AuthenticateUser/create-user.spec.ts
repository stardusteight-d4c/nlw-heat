import { describe, expect, it } from "vitest";
import { InMemoryUsersRepository } from "../../repositories/in-memory-users-repository";
import { User } from "../../entities/User";
import { CreateUser, CreateUserResponse } from "./create-user";
import { makeUserObject } from "../../factories/users-factory";

describe("Create a user", () => {
  it("must be possible to create a user", () => {
    const usersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(usersRepository);

    expect(
      createUser
        .execute(makeUserObject())
        .then((data: CreateUserResponse) => data),
    ).resolves.toBeTruthy()

    expect(
      createUser
        .execute(makeUserObject())
        .then((data: CreateUserResponse) => data.user),
    ).resolves.toBeInstanceOf(User);

    expect(
      createUser
        .execute(makeUserObject())
        .then((data: CreateUserResponse) => data.token),
    ).resolves.toBeTypeOf("string")
  });
});
