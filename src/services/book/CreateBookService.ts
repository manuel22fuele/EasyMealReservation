import { parse } from "dotenv";
import prismaClient from "../../prisma";

interface BookRequest {
  date: string;
  user_id: string;
  table_id: string;
  hour_id: string;
}

class CreateBookService {
  async execute({
   
    date,
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

    // Fetching user details
    const user = await prismaClient.user.findUnique({
      where: {
        id: user_id,
      },
      select: {
        name: true,
      },
    });

      
    // Creating a new book entry
    const createBook = await prismaClient.book.create({
      data: {

        date: date,
        user_id: user_id,
        table_id: table_id ,
        hour_id: hour_id,
      },
    });

    return createBook;
  }
}

export { CreateBookService };
