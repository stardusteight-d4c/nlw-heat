import { randomUUID } from "crypto";

export interface UserProps {
  name: string;
  username: string;
  avatar_url: string;
  github_id: string;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: UserProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
    };
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this.props.name;
  }
  public set name(name: string) {
    this.props.name = name;
  }

  public get avatar_url(): string {
    return this.props.avatar_url;
  }
  public set avatar_url(avatar_url: string) {
    this.props.avatar_url = avatar_url;
  }

  public get github_id(): string {
    return this.props.github_id;
  }
  public set github_id(github_id: string) {
    this.props.github_id = github_id;
  }

  public get username(): string {
    return this.props.username;
  }
  public set username(username: string) {
    this.props.username = username;
  }
}
