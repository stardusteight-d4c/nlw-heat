import { Message } from "../entities/Message";
import { github_id } from "../entities/User";

export function makeMessageObject(owner?: github_id) {
  return {
    text: "Valid message example",
    owner: owner ?? "invalid-github_id",
  };
}

export function makeMessageInstance(owner?: github_id) {
  return new Message({
    text: "Valid message example",
    owner: owner ?? "invalid-github_id",
  });
}
