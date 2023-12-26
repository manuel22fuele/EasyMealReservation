import { Request, Response } from "express";
import { ListHourService } from "../../services/hour/ListHoursService";



class ListHourController {

    async handle(req: Request, res: Response){

        const listHourService = new ListHourService();

        const ListHour = await listHourService.execute()

        return res.json(ListHour)
    }
}
export {ListHourController}