import { Request, Response } from "express";
import ThreadsService from "../../services/openai/ThreadsService";

class ThreadController {
  public service = new ThreadsService();

  public async createThreads(req: Request, res: Response): Promise<void> {
    try {
      const thread = req.body;
      await this.service.createThread(thread);
      res.status(201).json({ data: thread });
    } catch (error) {
      res.status(500).json({ Threads: "쓰레드 생성 중 오류가 발생했습니다." });
    }
  }

  public async retrieveThreads(req: Request, res: Response): Promise<void> {
    try {
      const thread = req.body;
      await this.service.retrieveThread(thread);
      res.status(201).json({ data: thread });
    } catch (error) {
      res.status(500).json({ Threads: "쓰레드 생성 중 오류가 발생했습니다." });
    }
  }

  public async updateThreads(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const updateThreads = req.body;
      const thread = await this.service.modifyThread(updateThreads);
      res.status(200).json({ data: thread });
    } catch (error) {
      res
        .status(500)
        .json({ Threads: "쓰레드 업데이트 중 오류가 발생했습니다." });
    }
  }

  public async deleteThreads(req: Request, res: Response): Promise<void> {
    try {
      const threadId = req.params.id;
      const thread = await this.service.deleteThread(threadId);
      res.status(200).json({ data: thread });
    } catch (error) {
      res.status(500).json({ Threads: "쓰레드 삭제 중 오류가 발생했습니다." });
    }
  }
}

export default new ThreadController();
