import prismaClient from "../../prisma";

interface UserRequest {
  user_id: string;
}

class ListMyBookService {
  async execute({ user_id }: UserRequest) {
    const listBook = await prismaClient.book.findFirst({
      where: {
        id: user_id,
      },
    
      
    });
return listBook
  }
}

export { ListMyBookService };
