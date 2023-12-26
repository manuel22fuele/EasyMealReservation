import prismaClient from "../../prisma";

interface OrderRequest{
  table: number;
  name: string;
}

class CreateOrderService{
  async execute({ table, name}: OrderRequest ){

    const checkIfOrderAlreadyExists = await prismaClient.order.findFirst({
      where: { 
        table: table
      }
    })

    if (checkIfOrderAlreadyExists){
      throw new Error("Table already exist")
    }

    const order = await prismaClient.order.create({
      data:{
        table: table,
        name: name
      }
    })


    return order;

  }
}

export { CreateOrderService }