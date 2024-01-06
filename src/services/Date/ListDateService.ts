import prismaClient from "../../prisma";


class ListDateService{
    async execute(){
         const ListDate = await prismaClient.date.findMany({
            select:{
                id:true,
                date:true
            }
         })
        return ListDate;

    }
}

export {ListDateService}
