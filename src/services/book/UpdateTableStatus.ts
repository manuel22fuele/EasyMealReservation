import prismaClient from "../../prisma";

interface UpdateRequest{
    table_id:string
}

class UpdateTableStatus{
    async execute({table_id}:UpdateRequest){

        const UpdateTable = await prismaClient.table.update({
            where:{
                id:table_id
            },

            data:{
                status:true
            }
        })

        return UpdateTable;
    }


}

export {UpdateTableStatus}