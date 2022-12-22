import { Message } from "../../../../domain/entities/Message";
import { MessagesRepository } from "../../../../domain/repositories/messages-repository";
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
        user: true
      }
    });

    const messageInstance = new Message(msg)

    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      create_at: message.created_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      }
    }
    
    io.emit("new_message", infoWS);

    return messageInstance;
  }

  findLastThree(): Promise<{ messages: Message[]; } | null> {
    throw new Error("Method not implemented.");
  }

}