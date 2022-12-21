import { describe, it, expect } from "vitest";
import { InMemoryMessagesRepository } from "../../tests/disk/in-memory-messages-repository";
import { Message } from "../entities/Message";
import {
  makeMessageInstance,
  makeMessageObject,
} from "../factories/messages-factory";
import { GetLastThereeMessages } from "./get-last-three-messages";
import { SendMessage } from "./send-message";

describe("Get the last three messages", () => {
  it("must be possible to get the last theree messages", async () => {
    const messagesRepository = new InMemoryMessagesRepository();
    const getLastThereeMessages = new GetLastThereeMessages(messagesRepository);
    const sendMessage = new SendMessage(messagesRepository);

    await sendMessage.execute(makeMessageObject("87643260"));
    await sendMessage.execute(makeMessageObject("87643260"));
    await sendMessage.execute(makeMessageObject("87643260"));

    const messages = await getLastThereeMessages
      .execute()
      .then((data) => data?.messages);

    expect(messages).toHaveLength(3);
    expect(messages?.[0]).toBeInstanceOf(Message);
  });

  it("should return an error when not returning three messages", async () => {
    const messagesRepository = new InMemoryMessagesRepository();
    const getLastThereeMessages = new GetLastThereeMessages(messagesRepository);
    const sendMessage = new SendMessage(messagesRepository);

    await sendMessage.execute(makeMessageObject("87643260"));
    await sendMessage.execute(makeMessageObject("87643260"));

    expect(getLastThereeMessages.execute()).rejects.toThrow();
  });
});
