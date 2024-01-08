import { Request, Response } from "express";
import { ListMyBookService } from "../../services/book/ListMyBookService";


class ListMyBookController{
    async handle(req: Request, res: Response){

        const user_id = req.params.user_id as string
        const listBookController = new ListMyBookService();
        const ListBook = await listBookController.execute({user_id})

        return res.json(ListBook)
    }
}

export {ListMyBookController}