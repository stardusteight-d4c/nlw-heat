import { Message } from "../../domain/entities/Message";
import { makeUserObject } from "../../domain/factories/users-factory";
import { MessagesRepository } from "../../domain/repositories/messages-repository";
import { CreateUser } from "../../domain/use-cases/create-user";
import { InMemoryUsersRepository } from "./in-memory-users-repository";

export class InMemoryMessagesRepository implements MessagesRepository {
  public messages: Message[] = [];

  async create(msg: Message): Promise<Message> {
    const usersRepository = new InMemoryUsersRepository()
    const createUser = new CreateUser(usersRepository);

    await createUser.execute(makeUserObject());
    
    const userExists = await usersRepository.findById(msg.owner);

    if (userExists !== null) {
      this.messages.push(msg);
      return msg;
    } else {
      throw new Error(`User with github_id (${msg.owner}) not found`)
    }
  }
}
