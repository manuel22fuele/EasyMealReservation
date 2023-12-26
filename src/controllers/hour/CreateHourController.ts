import { Request, Response } from "express";
import { CreateHourService } from "../../services/hour/CreateHourService";


class CreateHourController {

    async handle(req: Request, res: Response){
        const {hour} = req.body

        const createHourService = new CreateHourService();

        const CreateHour = await createHourService.execute({hour})

        return res.json(CreateHour)
    }
}
export {CreateHourController}