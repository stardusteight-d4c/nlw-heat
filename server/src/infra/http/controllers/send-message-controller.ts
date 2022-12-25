import { Request, Response } from "express";
import { SendMessage } from "../../../domain/use-cases/send-message";
import { PrismaMessagesRepository } from "../../database/prisma/repositories/prisma-messages-repository";

export class SendMessageController {
  async handle(req: Request, res: Response) {
    const messagesRepository = new PrismaMessagesRepository();
    const service = new SendMessage(messagesRepository);

    try {
      const { message } = req.body;
      const { user_id } = req;

      const result = await service.execute({ text: message, owner: user_id });
      return res.json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        status: false,
        msg: err,
      });
    }
  }
}
