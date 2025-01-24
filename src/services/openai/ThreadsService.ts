import OpenAI from "openai";
import env from "dotenv";
import {
  Thread,
  ThreadCreateParams,
  ThreadUpdateParams,
} from "../../types/openai";
env.config();

const openai = new OpenAI();

const threads = openai.beta.threads;

class ThreadsService {
  public async createThread(thread: ThreadCreateParams) {}
  public async retrieveThread(thread: ThreadUpdateParams) {}
  public async modifyThread(thread: Thread) {}
  public async deleteThread(id: string) {}
}

export default ThreadsService;
