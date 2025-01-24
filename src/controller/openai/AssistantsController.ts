import { Request, Response } from "express";
import assistantService from "../../services/openai/AssistantsService";
import {
  AssistantCreateParams,
  AssistantUpdateParams,
} from "../../types/openai";

const service = new assistantService();

class AssistantsController {
  async getAssistantList(req: Request, res: Response): Promise<void> {
    try {
      const assistants = await service.getAssistantList();
      res.status(200).json({ data: assistants });
    } catch (error) {
      res
        .status(500)
        .json({ Assistant: "사용자 목록을 가져오는 중 오류가 발생했습니다." });
    }
  }

  async getAssistant(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const assistants = await service.getAssistant(id);
      res.status(200).json({ data: assistants });
    } catch (error) {
      res
        .status(500)
        .json({ Assistant: "사용자 목록을 가져오는 중 오류가 발생했습니다." });
    }
  }
  // 사용자 생성
  async createAssistant(req: Request, res: Response): Promise<void> {
    try {
      const assistant: AssistantCreateParams = req.body;
      const assistants = await service.createAssistant(assistant);
      res.status(201).json({ data: assistants });
    } catch (error) {
      res
        .status(500)
        .json({ Assistant: "사용자 생성 중 오류가 발생했습니다." });
    }
  }

  // 사용자 업데이트
  async updateAssistant(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const updateAssistant = req.body;
      const assistants = await service.updateAssistant(id, updateAssistant);

      res.status(200).json({ data: assistants });
    } catch (error) {
      res
        .status(500)
        .json({ Assistant: "사용자 업데이트 중 오류가 발생했습니다." });
    }
  }

  // 사용자 삭제
  async deleteAssistant(req: Request, res: Response): Promise<void> {
    try {
      const assistantId = req.params.id;
      await service.deleteAssistant(assistantId);
      res.status(200).json({});
    } catch (error) {
      res
        .status(500)
        .json({ Assistant: "사용자 삭제 중 오류가 발생했습니다." });
    }
  }
}

export default new AssistantsController();
