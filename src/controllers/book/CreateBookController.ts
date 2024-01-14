import { Request, Response } from "express";
import { CreateBookService } from "../../services/book/CreateBookService";
import { UpdateTableStatus } from "../../services/book/UpdateTableStatus";
import { transporter } from "../../config/Mail/mail";
import { mailOptions } from "../../config/Mail/mail";

class CreateBookController{
    async handle(req: Request, res: Response){
        const {date_id, user_id, table_id, hour_id} = req.body

        const updateTableStatus = new UpdateTableStatus();
        const createBookService = new CreateBookService()

        

        const UpdateStatus = await updateTableStatus.execute({table_id})
    
        const CreateBook = await createBookService.execute({
            date_id,
            user_id,
            table_id,
            hour_id,
        })

        

        return res.json(CreateBook)
    } 
}

export {CreateBookController}