import prismaClient from "../../prisma";


class ListHourService{
    async execute(){
         const ListHour = await prismaClient.hour.findMany({
            select:{
                id:true,
                hour:true
            }
         })
        return ListHour;

    }
}

export {ListHourService}
