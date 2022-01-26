import { inject, injectable } from "tsyringe";

import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  // Adicionar coluna avatar na tabela de users
  // Refatorar usuário com coluna avatar
  // Configuração upload multerconsc
  // Criar regra de negócio do upload
  // Criar controller
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (user) {
      user.avatar = avatar_file;
    }
    // Já faz o update
    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
