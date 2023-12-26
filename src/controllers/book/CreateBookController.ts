import { Request, Response } from "express";
import { CreateBookService } from "../../services/book/CreateBookService";



class CreateBookController{
    async handle(req: Request, res: Response){
        const {name, number_people, date, user_id, table_id, hour_id} = req.body
        const createBookService = new CreateBookService()

        const CreateBook = await createBookService.execute({
            name, 
            number_people,
            date, 
            user_id,
            table_id,
            hour_id,
        })

        return res.json(CreateBook)
    } 
}

export {CreateBookController}