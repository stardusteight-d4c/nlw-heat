import { Message } from "../../../../domain/entities/Message";
import { User } from "../../../../domain/entities/User";
import { MessagesRepository } from "../../../../domain/repositories/messages-repository";
import { MessageMapper } from "../../../../mappers/mappers";
import { io } from "../../../http/app";
import prisma from "../index";

export class PrismaMessagesRepository implements MessagesRepository {
  async create(msg: Message): Promise<Message> {
    const message = await prisma.message.create({
      data: {
        text: msg.text,
        user_id: msg.owner,
      },
      include: {
        user: true,
      },
    });

    const messageInstance = new Message(msg);

    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      create_at: message.created_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      },
    };

    io.emit("new_message", infoWS);

    return messageInstance;
  }

  async findLastThree(): Promise<{ messages: Message[] } | null> {
    const messages = await prisma.message.findMany({
      take: 3,
      orderBy: {
        created_at: "desc",
      },
      include: {
        user: true,
      },
    });

    const messagesInstance: Message[] = [];
    messages.map((message) =>
      messagesInstance.push(
        MessageMapper.toDomain({
          id: message.id,
          text: message.text,
          created_at: message.created_at,
          user_id: message.user_id,
          user: new User({
            github_id: message.user.github_id,
            name: message.user.name,
            avatar_url: message.user.avatar_url,
            username: message.user.username,
          }),
        }),
      ),
    );

    return { messages: messagesInstance };
  }
}
