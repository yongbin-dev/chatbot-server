import { Request, Response } from "express";
import MessagesService from "../../services/openai/MessagesService";

class MessageController {
  public service = new MessagesService();

  public async getMessageList(req: Request, res: Response): Promise<void> {
    try {
      const messages = await this.service.getMessageList();
      res.status(200).json({ data: messages });
    } catch (error) {
      res
        .status(500)
        .json({ message: "사용자 목록을 가져오는 중 오류가 발생했습니다." });
    }
  }

  // 특정 사용자 조회
  public async retrieveMessage(req: Request, res: Response): Promise<void> {
    try {
      const message = req.body;
      const messages = await this.service.retrieveMessage(message);
      res.status(200).json({ data: messages });
    } catch (error) {
      res
        .status(500)
        .json({ message: "사용자를 가져오는 중 오류가 발생했습니다." });
    }
  }

  // 사용자 생성
  public async createMessage(req: Request, res: Response): Promise<void> {
    try {
      const message = req.body;
      const messages = await this.service.createMessage(message);
      res.status(201).json({ data: messages });
    } catch (error) {
      res.status(500).json({ message: "사용자 생성 중 오류가 발생했습니다." });
    }
  }

  // 사용자 업데이트
  public async updateMessage(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const updateMessage = req.body;
      const messages = await this.service.modifyMessage(updateMessage);
    } catch (error) {
      res
        .status(500)
        .json({ message: "사용자 업데이트 중 오류가 발생했습니다." });
    }
  }

  // 사용자 삭제
  public async deleteMessage(req: Request, res: Response): Promise<void> {
    try {
      // const userId = req.params.id;
      // const messages = await this.service.deleteMessage(id);
      res.status(200).json({});
    } catch (error) {
      res.status(500).json({ message: "사용자 삭제 중 오류가 발생했습니다." });
    }
  }
}

export default new MessageController();
