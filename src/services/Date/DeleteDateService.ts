import prismaClient from "../../prisma";

interface DateRequest{
    date_id: string
}
class DeleteDateService{
    async execute({date_id}: DateRequest){
       const DeleteDate = await prismaClient.date.delete({
        where:  {
            id: date_id
        }
       })

       return DeleteDate;
    }
}
export {DeleteDateService}
