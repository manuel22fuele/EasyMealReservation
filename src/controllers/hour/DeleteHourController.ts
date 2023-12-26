import { Request, Response } from "express";
import { DeleteHourService } from "../../services/hour/DeleteHourService";


class DeleteHourController {

    async handle(req: Request, res: Response){
        const hour_id = req.query.hour_id as string

        const deleteHourService = new DeleteHourService();

        const DeleteHour = await deleteHourService.execute({hour_id})

        return res.json(DeleteHour)
    }
}
export {DeleteHourController}