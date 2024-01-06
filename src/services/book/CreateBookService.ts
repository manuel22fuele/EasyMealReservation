import { parse } from "dotenv";
import prismaClient from "../../prisma";

interface BookRequest {
  date_id: string;
  user_id: string;
  table_id: string;
  hour_id: string;
}

class CreateBookService {
  async execute({
    date_id,
    user_id,
    table_id,
    hour_id,
  }: BookRequest) {
    // Checking if the Booking already exists
    const checkIfBookAlreadyExists = await prismaClient.book.findFirst({
      where: {
        user_id: user_id,
      },
    });
    
    if (checkIfBookAlreadyExists) {
      throw new Error("Reservation already exists.");
    }

      
    // Creating a new book entry
    const createBook = await prismaClient.book.create({
      data:{
        user_id:user_id,
        date_id:date_id,
        hour_id:hour_id,
        table_id:table_id
      }
    });

    return createBook;
  }
}

export { CreateBookService };
