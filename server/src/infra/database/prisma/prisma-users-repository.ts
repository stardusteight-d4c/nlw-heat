import prisma from "./index";
import { sign } from "jsonwebtoken";
import { User } from "../../../domain/entities/User";
import { UsersRepository } from "../../../domain/repositories/users-repository";
import axios from "axios";

// https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#web-application-flow

interface AccessTokenResponse {
  access_token: string;
}

interface UserResponse {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
}

export class PrismaUsersRepository implements UsersRepository {
  async register(code: string): Promise<{ token: string; user: User }> {
    console.log(code);

    const acess_token_url = "https://github.com/login/oauth/access_token";
    const { data } = await axios
      .post<AccessTokenResponse>(acess_token_url, null, {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: { Accept: "application/json" },
      })
      .catch((error) => {
        throw new Error("The code passed is incorrect or expired.");
      });

    const res = await axios.get<UserResponse>("https://api.github.com/user", {
      headers: {
        authorization: `Bearer ${data.access_token}`,
      },
    });

    const { login: username, id, avatar_url, name } = res.data;

    const userData = await prisma.user.findFirst({
      where: {
        github_id: id.toString(),
      },
    });

    const user =
      userData ??
      (await prisma.user.create({
        data: {
          github_id: id.toString(),
          username,
          avatar_url,
          name,
        },
      }));

    const userInstance = new User(user);

    const token = sign(
      {
        user: {
          name: user.name,
          avatar_url: user.avatar_url,
          id: user.id,
        },
      },
      process.env.JWT_SECRET!,
      {
        subject: user.id,
        expiresIn: "1d",
      },
    );

    return { token, user: userInstance };
  }

  findByGithubID(id: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
}
