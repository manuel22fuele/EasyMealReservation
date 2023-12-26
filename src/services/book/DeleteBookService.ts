import prismaClient from "../../prisma";

interface DeleteBook{
    book_id: string
}
class DeleteBookService {
    async execute({book_id}:DeleteBook){
        const DeteleBook = prismaClient.book.delete({
            where:{
                id: book_id,
            }    
        })
            return DeteleBook;
    }
}
export {DeleteBookService}