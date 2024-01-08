import prismaClient from "../../prisma";

interface UserRequest {
  user_id: string;
}

class ListMyBookService {
  async execute({ user_id }: UserRequest) {
    const listBook = await prismaClient.book.findFirst({
      where: {
        user_id: user_id,
      },
    
    });
return listBook
  }
}

export { ListMyBookService };
