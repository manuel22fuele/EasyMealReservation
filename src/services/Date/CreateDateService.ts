import prismaClient from "../../prisma";

interface DateRequest{
date: string
}
class CreateDateService{
    async execute({date}: DateRequest){

       const checkIfHourAlreadyExists = await prismaClient.date.findFirst({
        where: {
            date: date
        }
       })

       if (checkIfHourAlreadyExists) {
        throw new Error("This date already exists.")
       }

       const CreateDate = await prismaClient.date.create({
        data:  {
            date:date
        }
       })

       return CreateDate;
    }
}

export {CreateDateService}
