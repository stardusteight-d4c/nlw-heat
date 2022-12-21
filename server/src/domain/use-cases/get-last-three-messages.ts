import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/messages-repository";

export interface GetLastThereeMessagesReponse {
  messages: Message[];
}

export class GetLastThereeMessages {
  constructor(private messagesRepository: MessagesRepository) {}

  async execute(): Promise<GetLastThereeMessagesReponse | null> {
    const messages = await this.messagesRepository
      .findLastThree()
      .then((data) => data?.messages);

    if (messages?.length !== 3) {
      throw new Error("Three messages were not returned");
    }

    return { messages };
  }
}
