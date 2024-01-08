import prismaClient from '../../prisma';

interface UserRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  user_id: string;
}

class UpdateUserService {
  async execute({ name, phone, email, password, user_id }: UserRequest) {
    const updatedUser = await prismaClient.user.update({
      where: {
        id: user_id,
      },
      data: {
        name,
        email,
        password,
        phone,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
      },
    });

    return updatedUser;
  }
}

export { UpdateUserService };
