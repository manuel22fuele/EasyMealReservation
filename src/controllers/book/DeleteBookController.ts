import { Response, Request } from "express";
import { DeleteBookService } from "../../services/book/DeleteBookService";

class DeleteBookController{
    async handle(req: Request, res: Response){
        const book_id = req.query.book_id as string
        const deleteBookService = new DeleteBookService()
        const DeleteBook = await deleteBookService.execute({book_id})
        return res.json(DeleteBook);
    }
}

export {DeleteBookController}