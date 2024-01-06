import prismaClient from "../../prisma";

class ListBookService{
    async execute(){
        const ListBook = await prismaClient.book.findMany({
            

            include:{
                
             user:{
                select:{
                    name:true
                }
             },
             tables:{
                select:{
                    quantity_people:true,
                    number_table:true
                }
             },
             hours:{
                select:{
                    hour:true
                }
             }
            }
        })

        const camposExtraidos = ListBook.map((livro) => ({
            hour: livro.hours.hour,
            name: livro.user.name, // Use encadeamento opcional caso 'users' seja indefinido
            table: {
              quantity_people: livro.tables.quantity_people,
              number_table: livro.tables.number_table,
            },
          }));
      
          return camposExtraidos;
       
    }
}

export {ListBookService}