import prismaClient from "../../prisma";

interface MyBookRequest{
  user_id: string
}
class ListMyBookService {
  async execute({user_id }: MyBookRequest ) {
    const listMyBook = await prismaClient.book.findMany({
      where: {
        user_id: user_id
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        tables: {
          select: {
            quantity_people: true,
            number_table: true,
          },
        },
        hours: {
          select: {
            hour: true,
          },
        },
        dates: {
          select: {
            date: true,
          },
        },
      },
    });

    return listMyBook;
  }
}

export { ListMyBookService };
