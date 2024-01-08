import {Request, response, Response} from 'express'
import { UpdateUserService } from '../../services/user/UpdateUserService';


class UpdateUserController{
  async handle(req: Request, res: Response){
    const { name, email, password, phone } = req.body;
    const user_id = req.params.user_id as string

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({
      name,
      email,
      password,
      phone,
      user_id
    });

    return res.json(user)
  }
}

export { UpdateUserController }