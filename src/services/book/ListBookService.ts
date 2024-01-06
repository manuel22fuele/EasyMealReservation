import prismaClient from "../../prisma";

class ListBookService{
    async execute(){
        const ListBook = await prismaClient.book.findMany({
            include:{
             user:true,
             tables:true,
             hours:true
            }
        })
        return ListBook;
    }
}

export {ListBookService}