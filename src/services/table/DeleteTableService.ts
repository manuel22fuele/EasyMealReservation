import prismaClient from "../../prisma";

interface TableRequest{
    table_id: string
}

class DeleteTableService {
   async execute({table_id}:TableRequest){
        const DeleteTable = await prismaClient.table.delete({
           where:{
            id:table_id
           } 
        })
        return DeleteTable
   } 	
}

export {DeleteTableService}