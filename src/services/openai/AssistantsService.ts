import OpenAI from "openai";
import env from "dotenv";
import {
  AssistantCreateParams,
  AssistantListParams,
  AssistantUpdateParams,
} from "../../types/openai";

env.config();

const openai = new OpenAI();
const assistant = openai.beta.assistants;

class AssistantsService {
  public async createAssistant(params: AssistantCreateParams) {
    await assistant.create(params);
  }

  public async deleteAssistant(id: string) {
    await assistant.del(id);
  }

  public async updateAssistant(id: string, params: AssistantUpdateParams) {
    await assistant.update(id, params);
  }

  public async getAssistantList() {
    const response = await assistant.list();
    return response;
  }

  public async getAssistant(id: string, query?: AssistantListParams) {
    const { data } = await openai.beta.assistants.list();
    return data.filter((i) => i.id === id)[0];
  }
}

export default AssistantsService;
