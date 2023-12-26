import prismaClient from "../../prisma";

interface HourRequest{
    hour: string
}
class CreateHourService{
    async execute({hour}: HourRequest){

       const checkIfHourAlreadyExists = await prismaClient.hour.findFirst({
        where: {
            hour: hour
        }
       })

       if (checkIfHourAlreadyExists) {
        throw new Error("This hour already exists.")
       }

       const CreateHour = await prismaClient.hour.create({
        data:  {
            hour:hour
        }
       })

       return CreateHour;


    }
}

export {CreateHourService}
