import { describe, expect, it } from "vitest";
import { InMemoryUsersRepository } from "../../tests/disk/in-memory-users-repository";
import { CreateUser } from "./create-user";
import { makeUserObject } from "../factories/users-factory";
import { FindUser } from "./find-user";
import { User } from "../entities/User";

describe("Find a user", () => {
  it("must be possible to find a user by ID", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(usersRepository);
    const findUser = new FindUser(usersRepository);

    const { user } = await createUser.execute(makeUserObject());

    const data = await findUser.execute({ id: user.github_id });

    expect(findUser.execute({ id: user.github_id })).resolves.toEqual({ user });
    expect(findUser.execute({ id: "non-existent-id" })).resolves.toEqual(null);
    expect(data?.user).instanceOf(User);
  });
});
