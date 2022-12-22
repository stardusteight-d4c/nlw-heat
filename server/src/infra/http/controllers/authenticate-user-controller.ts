
import { Request, Response } from "express";
import { RegisterUser } from "../../../domain/use-cases/register-user";
import { PrismaUsersRepository } from "../../database/prisma/prisma-users-repository";

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body;
    console.log(code);
    
    const userRepository = new PrismaUsersRepository()
    const service = new RegisterUser(userRepository);
    try {
      const result = await service.execute({code: code});
      return res.json(result);
    } catch (err) {
      console.error(err)
      return res.status(500).json({
        status: false,
        msg: "The code passed is incorrect or expired.",
      })
    }

  }
}


export { AuthenticateUserController };