import { describe, expect, it } from "vitest";
import { InMemoryUsersRepository } from "../../tests/disk/in-memory-users-repository";
import { CreateUser } from "./create-user";
import { makeUserObject } from "../factories/users-factory";
import { User } from "../entities/User";
import { GetUserByGithubID } from "./get-user-by-github_id";

describe("Get a user by Github ID", () => {
  it("must be possible to get a user by Github ID", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(usersRepository);
    const findUser = new GetUserByGithubID(usersRepository);

    const { user } = await createUser.execute(makeUserObject());

    const data = await findUser.execute({ id: user.github_id });

    expect(findUser.execute({ id: user.github_id })).resolves.toEqual({ user });
    expect(findUser.execute({ id: "non-existent-id" })).resolves.toEqual(null);
    expect(data?.user).instanceOf(User);
  });
});
