import { describe, expect, it } from "vitest";
import { InMemoryMessagesRepository } from "../../tests/disk/in-memory-messages-repository";
import { InMemoryUsersRepository } from "../../tests/disk/in-memory-users-repository";
import { Message } from "../entities/Message";
import { makeMessageObject } from "../factories/messages-factory";
import { makeUserObject } from "../factories/users-factory";
import { RegisterUser } from "./register-user";
import { SendMessage, SendMessageResponse } from "./send-message";

describe("Send a message", () => {
  it("must be possible to send a message", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const registerUser = new RegisterUser(usersRepository);
    const messagesRepository = new InMemoryMessagesRepository();
    const sendMessage = new SendMessage(messagesRepository);

    const { user } = await registerUser.execute(makeUserObject());

    expect(
      sendMessage
        .execute(makeMessageObject(user.github_id))
        .then((data: SendMessageResponse) => data.message),
    ).resolves.toBeInstanceOf(Message);

    expect(
      sendMessage
        .execute(makeMessageObject())
        .then((data: SendMessageResponse) => data.message),
    ).rejects.toThrow();
  });
});
