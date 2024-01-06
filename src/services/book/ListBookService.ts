import prismaClient from "../../prisma";

class ListBookService{
    async execute(){
        const ListBook = await prismaClient.book.findMany({
            include:{
             user:{
                select:{
                    name:true
                }
             },
             tables:{
                select:{
                    quantity_people:true,
                    number_table:true
                }
             },
             hours:{
                select:{
                    hour:true
                }
             }
            }
        })
        return ListBook;
    }
}

export {ListBookService}