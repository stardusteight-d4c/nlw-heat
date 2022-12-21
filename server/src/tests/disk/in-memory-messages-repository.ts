import { Message } from "../../domain/entities/Message";
import {
  makeMessageInstance,
  makeMessageObject,
} from "../../domain/factories/messages-factory";
import { makeUserObject } from "../../domain/factories/users-factory";
import { MessagesRepository } from "../../domain/repositories/messages-repository";
import { CreateUser } from "../../domain/use-cases/create-user";
import { InMemoryUsersRepository } from "./in-memory-users-repository";

const usersRepository = new InMemoryUsersRepository();
const createUser = new CreateUser(usersRepository);

export class InMemoryMessagesRepository implements MessagesRepository {
  public messages: Message[] = [];

  async create(msg: Message): Promise<Message> {
    await createUser.execute(makeUserObject());

    const isUserExisting = await usersRepository.findByGithubID(msg.owner);

    if (isUserExisting !== null) {
      this.messages.push(msg);
      return msg;
    } else {
      throw new Error(`User with github_id (${msg.owner}) not found`);
    }
  }

  async findLastThree(): Promise<{ messages: Message[] }> {
    const messages = this.messages.slice(-3);

    return { messages };
  }
}
