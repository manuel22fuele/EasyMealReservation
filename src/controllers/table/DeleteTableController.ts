import { Request, Response } from "express";
import { DeleteTableService } from "../../services/table/DeleteTableService";

class DeleteTableController{
    async handle(req:Request, res:Response){
        const table_id = req.query.table_id as string

        const deleteTableService = new DeleteTableService()

        const DeleteTable = await deleteTableService.execute({table_id})
        
        return res.json(DeleteTable)
    }
    
}
export {DeleteTableController}