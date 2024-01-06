import { Request, Response } from "express";
import { ListDateService } from "../../services/Date/ListDateService";



class ListDateController {

    async handle(req: Request, res: Response){

        const listDateService = new ListDateService();

        const ListDate = await listDateService.execute()

        return res.json(ListDate)
    }
}
export {ListDateController}