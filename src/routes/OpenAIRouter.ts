import { Router } from "express";
import multer from "multer";

import { getMessage } from "../util/AIUtil";
import threadController from "../controller/openai/ThreadsController";
import assistantController from "../controller/openai/AssistantsController";
import messageController from "../controller/openai/MessageController";

const OpenAIRouter = Router();

OpenAIRouter.get("/assistant", assistantController.getAssistantList);
OpenAIRouter.get("/assistant/:id", assistantController.getAssistant);
OpenAIRouter.post("/assistant", assistantController.createAssistant);
OpenAIRouter.put("/assistant/:id", assistantController.updateAssistant);
OpenAIRouter.delete("/assistant/:id", assistantController.deleteAssistant);

OpenAIRouter.post("/thread", threadController.createThreads);
OpenAIRouter.put("/thread/:id", threadController.updateThreads);
OpenAIRouter.delete("/thread/:id", threadController.deleteThreads);

OpenAIRouter.get("/message", messageController.getMessageList);
OpenAIRouter.post("/message", messageController.createMessage);
OpenAIRouter.put("/message/:id", messageController.updateMessage);
OpenAIRouter.delete("/message/:id", messageController.deleteMessage);

export default OpenAIRouter;

// /* GET users listing. */
// UploadRouter.get("/:id", function (req, res, next) {
//   res.send("respond with a resource");
// });

// export default UploadRouter;
