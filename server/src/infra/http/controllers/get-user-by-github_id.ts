import { Request, Response } from "express";
import { GetUserByGithubID } from "../../../domain/use-cases/get-user-by-github_id";
import { UserMapper } from "../../../mappers/user-mapper";
import { PrismaUsersRepository } from "../../database/prisma/prisma-users-repository";

export class GetUserByGithubIDController {
  async handle(req: Request, res: Response) {
    const { user_id } = req

    console.log('user_id', user_id);
    

    try {
      const usersRepository = new PrismaUsersRepository()
      const service = new GetUserByGithubID(usersRepository);
      const result = await service.execute({id: user_id});

      if (!result?.user) {
        return null
      }

      const toPrisma =  UserMapper.toPrisma(result.user)
      

      return res.status(200).json(toPrisma);
    } catch (error) {
      
    }
  }
}