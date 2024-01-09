import prismaClient from "../../prisma";


class ListMyBookService {
  async execute(user_id : string) {
    const listBook = await prismaClient.book.findFirst({
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

    return listBook;
  }
}

export { ListMyBookService };
