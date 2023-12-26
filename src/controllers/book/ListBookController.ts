import { Request, Response } from "express";
import { ListBookService } from "../../services/book/ListBookService";

class ListBookController{
    async handle(req: Request, res: Response){
        const listBookController = new ListBookService();
        const ListBook = await listBookController.execute()

        return res.json(ListBook)
    }
}

export {ListBookController}