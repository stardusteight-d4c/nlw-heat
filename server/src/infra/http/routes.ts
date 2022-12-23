import { Router } from "express";
import { AuthenticateUserController } from "./controllers/authenticate-user-controller";
import { GetLastThereeMessagesController } from "./controllers/get-last-three-messages-controller";
import { GetUserByGithubIDController } from "./controllers/get-user-by-github_id-controller";
import { SendMessageController } from "./controllers/send-message-controller";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
router.get(
  "/profile",
  ensureAuthenticated,
  new GetUserByGithubIDController().handle,
);
router.post(
  "/messages",
  ensureAuthenticated,
  new SendMessageController().handle,
);
router.get("/messages/last3", new GetLastThereeMessagesController().handle);

export { router };
