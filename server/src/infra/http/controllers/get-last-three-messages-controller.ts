import { Request, Response } from "express";
import { GetLastThereeMessages } from "../../../domain/use-cases/get-last-three-messages";
import { MessageMapper } from "../../../mappers/mappers";
import { PrismaMessagesRepository } from "../../database/prisma/repositories/prisma-messages-repository";

export class GetLastThereeMessagesController {
  async handle(req: Request, res: Response) {
    const messagesRepository = new PrismaMessagesRepository();
    const service = new GetLastThereeMessages(messagesRepository);

    try {
      const result = await service.execute();

      const messages: any = [];
      result?.messages.map((message: any) =>
        messages.push(MessageMapper.toHttp(message)),
      );

      return res.json(messages);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        status: false,
        msg: err,
      });
    }
  }
}
