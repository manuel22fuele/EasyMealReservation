import { Request, Response } from "express";
import { DeleteDateService } from "../../services/Date/DeleteDateService";


class DeleteDateController {

    async handle(req: Request, res: Response){
        const date_id = req.query.hour_id as string

        const deleteDateService = new DeleteDateService();

        const DeleteDate = await deleteDateService.execute({date_id})

        return res.json(DeleteDate)
    }
}
export {DeleteDateController}