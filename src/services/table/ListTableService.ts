import prismaClient from "../../prisma";

class ListTableService{
   async execute(){
        const ListTable = await prismaClient.table.findMany()
          return ListTable;  
    }
}
export {ListTableService}