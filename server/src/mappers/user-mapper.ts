// import { User as rawUser } from "@prisma/client";
// import { User } from "../domain/entities/User";

// // export interface UserProps {
// //   name: string;
// //   username: string;
// //   avatar_url: string;
// //   github_id: github_id;
// // }

// export class UserMapper {
//   static toPrisma(user: User) {
//     return {
//       id: user.id,
//       name: user.name,
//       github_id: user.github_id,
//       username: user.username,
//     };
//   }

//   static toDomain(raw: rawUser): Notification {
//     return new Notification(
//       {
//        name: raw.name,
//       },
//       raw.id,
//     );
//   }
// }