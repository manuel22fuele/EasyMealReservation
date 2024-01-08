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

    if (!listBook) {
      throw new Error("Reserva não encontrado");
    }

    const camposExtraidos = {
      date: listBook.dates.date,
      hour: listBook.hours.hour,
      name: listBook.user.name,
      table: {
        quantity_people: listBook.tables.quantity_people,
        number_table: listBook.tables.number_table,
      },
    };

    return camposExtraidos;
  }
}

export { ListMyBookService };
