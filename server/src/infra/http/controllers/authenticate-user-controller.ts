import { Request, Response } from "express";
import { RegisterUser } from "../../../domain/use-cases/register-user";
import { PrismaUsersRepository } from "../../database/prisma/repositories/prisma-users-repository";

export class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    
    const usersRepository = new PrismaUsersRepository();
    const service = new RegisterUser(usersRepository);
    try {
      const { code } = req.body;
      const result = await service.execute({ code: code });
      return res.status(200).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        status: false,
        msg: "The code passed is incorrect or expired.",
      });
    }
  }
}
