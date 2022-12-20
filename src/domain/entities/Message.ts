import { randomUUID } from "crypto";

export interface MessageProps {
  text: string;
  created_at: Date;
  owner: string;
}

export class Message {
  private _id: string;
  private props: MessageProps;

  constructor(props: MessageProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
    };
  }

  public get id(): string {
    return this._id;
  }
  public get created_at(): Date {
    return this.props.created_at;
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
