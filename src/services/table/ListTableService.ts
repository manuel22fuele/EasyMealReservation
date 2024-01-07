import prismaClient from "../../prisma";

class ListTableService{
   async execute(){
        const ListTable = await prismaClient.table.findMany({
          select:{
            id:true,
            quantity_people:true,
            number_table:true,
            status:true
          }
        })
          return ListTable;  
    }
}
export {ListTableService}