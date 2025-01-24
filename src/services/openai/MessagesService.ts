import env from "dotenv";
import OpenAI from "openai";
import {
  Message,
  MessageCreateParams,
  MessageUpdateParams,
} from "../../types/openai";

env.config();

const openai = new OpenAI();

class MessagesService {
  public async createMessage(message: MessageCreateParams) {
    const threadMessages = await openai.beta.threads.messages.create(
      "thread_abc123",
      {
        role: "user",
        content: "How does AI work? Explain it in simple terms.",
      }
    );
  }
  public async retrieveMessage(message: MessageCreateParams) {}
  public async modifyMessage(message: MessageUpdateParams) {}
  public async deleteMessage(message: Message) {}
  public async getMessageList() {}
}

export default MessagesService;
