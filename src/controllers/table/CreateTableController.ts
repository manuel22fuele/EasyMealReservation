import { Request, Response } from "express"
import { CreateTableService } from "../../services/table/CreateTableService"

class CreateTableController{
    async handle(req: Request, res: Response){
        const {number_table, quantity_people} = req.body
        
        const createTableService = new CreateTableService()
        const CreateTable = await createTableService.execute({
           number_table, 
           quantity_people,
        })

        return res.json(CreateTable);
    }
}

export {CreateTableController}