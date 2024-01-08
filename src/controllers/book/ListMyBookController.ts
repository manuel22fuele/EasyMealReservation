import { Request, Response } from "express";
import { ListMyBookService } from "../../services/book/ListMyBookService";

class ListMyBookController {
  async handle(req: Request, res: Response) {
    try {
      const user_id = req.params.user_id as string;
      const listBookService = new ListMyBookService();
      const listBook = await listBookService.execute({ user_id });

      return res.json(listBook);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar as reservas" });
    }
  }
}

export { ListMyBookController };
