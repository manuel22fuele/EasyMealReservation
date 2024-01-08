import prismaClient from '../../prisma'


interface UserRequest{
  name: string;
  email: string;
  password: string;
  phone: string;
  user_id: string
}

class UpdateUserService{
  async execute({ name, phone, email, password, user_id }: UserRequest){
    const user = await prismaClient.user.update({
        where:{
            id: user_id
        },
      data:{
        name: name,
        email: email,
        password: password,
        phone: phone,

      },
      select:{
        id: true,
        name: true,       
        email: true,
        phone: true,
      }
    })


    return user;
  }
}

export { UpdateUserService }