import OpenAI from "openai";

export type AssistantCreateParams =
  OpenAI.Beta.Assistants.AssistantCreateParams;

export type AssistantUpdateParams =
  OpenAI.Beta.Assistants.AssistantUpdateParams;

export type Assistant = OpenAI.Beta.Assistants.Assistant;
export type AssistantListParams = OpenAI.Beta.Assistants.AssistantListParams;

export type ThreadCreateParams = OpenAI.Beta.Threads.ThreadCreateParams;
export type ThreadUpdateParams = OpenAI.Beta.Threads.ThreadUpdateParams;
export type Thread = OpenAI.Beta.Threads.Thread;

export type MessageCreateParams = OpenAI.Beta.Threads.MessageCreateParams;
export type MessageUpdateParams = OpenAI.Beta.Threads.MessageUpdateParams;
export type Message = OpenAI.Beta.Threads.Message;
