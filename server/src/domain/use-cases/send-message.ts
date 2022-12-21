import { Message } from "../entities/Message";
import { github_id } from "../entities/User";
import { MessagesRepository } from "../repositories/messages-repository";

export interface SendMessageRequest {
  text: string;
  owner: github_id;
}

export interface SendMessageResponse {
  message: Message;
}

export class SendMessage {
  constructor(private messagesRepository: MessagesRepository) {}

  async execute(request: SendMessageRequest): Promise<SendMessageResponse> {
    const msg = new Message(request);

    const message = await this.messagesRepository.create(msg);

    return { message };
  }
}
