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
      try {
        console.log("Updating user with ID:", user_id);
        console.log("New data:", { name, email, password, phone });
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
  
        // ... código existente ...
  
        return updatedUser;
      } catch (error) {
        console.error("Error updating user:", error);
        throw new Error("Failed to update user");
      }
    }
  }
  