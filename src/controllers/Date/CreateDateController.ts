import { Request, Response } from "express";
import { CreateDateService } from "../../services/Date/CreateDateService";


class CreateDateController {

    async handle(req: Request, res: Response){
        const {date} = req.body

        const createDateService = new CreateDateService();

        const CreateDate = await createDateService.execute({date})

        return res.json(CreateDate)
    }
}
export {CreateDateController}