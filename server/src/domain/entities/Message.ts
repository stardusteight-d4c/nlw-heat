import { randomUUID } from "crypto";
import { github_id } from "./User";

export interface MessageProps {
  text: string;
  owner: github_id;
}

export class Message {
  private _id: string;
  private created_at: Date;
  private props: MessageProps;

  constructor(props: MessageProps, id?: string, createdAt?: Date) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
    };
    this.created_at = createdAt ?? new Date()
  }

  public get id(): string {
    return this._id;
  }
  public get createdAt(): Date {
    return this.created_at;
  }
  public get owner(): string {
    return this.props.owner;
  }

  public get text(): string {
    return this.props.text;
  }
  public set text(text: string) {
    this.props.text = text;
  }
}
