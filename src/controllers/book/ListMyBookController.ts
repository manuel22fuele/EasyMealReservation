import { Request, Response } from "express";
import { ListMyBookService } from "../../services/book/ListMyBookService";


class ListMyBookController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id 
        const listMyBookController = new ListMyBookService();
        const ListMyBook = await listMyBookController.execute({user_id})

        return res.json(ListMyBook)
    }
}

export {ListMyBookController}