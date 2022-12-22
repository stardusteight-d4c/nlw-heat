import { User as rawUser } from "@prisma/client";
import { User, UserProps } from "../domain/entities/User";

export class UserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      github_id: user.github_id,
      username: user.username,
      avatar_url: user.avatar_url
    };
  }
}

//   static toDomain(raw: rawUser): Notification {
//     return new Notification(
//       {
//         name: raw.name,
//       },
//       raw.id,
//     );
//   }
// }
