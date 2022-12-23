import { Message } from "../domain/entities/Message";
import { User } from "../domain/entities/User";

interface MessageModelToDomain {
  id: string;
  text: string;
  created_at: Date;
  user_id: string;
  user: User;
}

export interface MessageModelToHttp {
  id: string;
  text: string;
  created_at: Date;
  owner: string;
  user: {
    props: {
      _id: string;
      props: {
        github_id: string;
        name: string;
        avatar_url: string;
        username: string;
      };
    };
  };
}

export class UserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      github_id: user.github_id,
      username: user.username,
      avatar_url: user.avatar_url,
    };
  }
}

export class MessageMapper {
  static toDomain(message: MessageModelToDomain) {
    return new Message({
      text: message.text,
      owner: message.user_id,
      user: new User(message.user!),
    });
  }

  static toHttp(message: MessageModelToHttp) {
    return {
      id: message.id,
      text: message.text,
      created_at: new Date(message.text),
      user_id: message.owner,
      user: {
        id: message.user.props._id,
        name: message.user.props.props.name,
        github_id: message.user.props.props.github_id,
        username: message.user.props.props.username,
        avatar_url: message.user.props.props.avatar_url,
      },
    };
  }
}
