import axios from "axios";
import prismaClient from "../prisma";
import { sign } from "jsonwebtoken";

/**
 * Receber code(string) do GitHub 
 * Recuperar o access_token do GitHub
 * Recuperar informações do usuário no GitHub
 * Verificar se o usuário já existe no banco de dados
 * Se sim, gerar um token de acesso
 * Se não, criar um novo usuário no banco de dados e gerar um token de acesso
 * Retornar o token de acesso com as informações do usuário
 */

interface IAccessTokenResponse {
  access_token: string;
}

interface IUserResponse {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
}

class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token";
    const { data: IAccessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }, headers: { "Accept": "application/json" }
    })
    const res = await axios.get<IUserResponse>("https://api.github.com/user", {
      headers: {
        authorization: `Bearer ${IAccessTokenResponse.access_token}`,
      }
    })

    const { login, id, avatar_url, name } = res.data;

    let user = await prismaClient.user.findFirst({
      where: {
        github_id: id
      }
    })

    if (!user) {
      await prismaClient.user.create({
        data: {
          github_id: id,
          login,
          avatar_url,
          name
        }
      })
    }
    const token = sign({
      user: {
        name: user.name,
        avatar_url: user.avatar_url,
        id: user.id
      }
    }, 
    process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: "1d",
    }
    );

    return { token, user };
  }
}

export { AuthenticateUserService }