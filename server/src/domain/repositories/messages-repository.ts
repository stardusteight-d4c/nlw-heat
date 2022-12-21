import { Message } from "../entities/Message";

export abstract class MessagesRepository {
  abstract create(msg: Message): Promise<Message>;
  abstract findLastThree(): Promise<{ messages: Message[] } | null>;
}
