import { Request, Response } from "express";
import { GetUserByGithubID } from "../../../domain/use-cases/get-user-by-github_id";
import { UserMapper } from "../../../mappers/mappers";
import { PrismaUsersRepository } from "../../database/prisma/repositories/prisma-users-repository";

export class GetUserByGithubIDController {
  async handle(req: Request, res: Response) {
    const usersRepository = new PrismaUsersRepository();
    const service = new GetUserByGithubID(usersRepository);
    
    try {
      const { user_id } = req;
      const result = await service.execute({ id: user_id });

      if (!result?.user) {
        return null;
      }
      
      const toPrisma = UserMapper.toPrisma(result.user);

      return res.status(200).json(toPrisma);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        status: false,
        msg: err,
      });
    }
  }
}
