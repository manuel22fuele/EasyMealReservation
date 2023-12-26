import prismaClient from "../../prisma";

class ListBookService{
    async execute(){
        const ListBook = await prismaClient.book.findMany()
        return ListBook;
    }
}

export {ListBookService}