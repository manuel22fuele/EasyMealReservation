import prismaClient from "../../prisma";


class ListHourService{
    async execute(){
         const ListHour = await prismaClient.hour.findMany()
        return ListHour;

    }
}

export {ListHourService}
