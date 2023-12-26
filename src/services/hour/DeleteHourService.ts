import prismaClient from "../../prisma";

interface HourRequest{
    hour_id: string
}
class DeleteHourService{
    async execute({hour_id}: HourRequest){
       const DeleteHour = await prismaClient.hour.delete({
        where:  {
            id: hour_id
        }
       })

       return DeleteHour;
    }
}
export {DeleteHourService}
