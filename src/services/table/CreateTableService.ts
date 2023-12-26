import prismaClient from "../../prisma";

interface TableRequest{
    number_table: number,
    quantity_people: number,
}

class CreateTableService{
    async execute({number_table, quantity_people}: TableRequest){

        const checkIfTableAlreadyExists = await prismaClient.table.findFirst({
            where: {
                number_table: number_table
            }
        })

        if (checkIfTableAlreadyExists){
            throw new Error("This table already exists")
        }

        const CreateTable = await prismaClient.table.create({
            data:{
                number_table: number_table,
                quantity_people: quantity_people
            }
        })

        return CreateTable;
    }
}

export {CreateTableService}