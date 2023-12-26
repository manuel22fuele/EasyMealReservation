import { Request, Response } from "express";
import { ListTableService } from "../../services/table/ListTableService";



class ListTableController {

    async handle(req: Request, res: Response){

        const listTableService = new ListTableService();

        const ListTable = await listTableService.execute()

        return res.json(ListTable)
    }
}
export {ListTableController}