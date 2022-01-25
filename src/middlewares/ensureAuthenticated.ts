import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppErrors";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string; // resposta do verify do jwt
}
export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // quando o front envia o token, ele envia dentro do headers
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  // Bearer 81271a38h37H1837A83
  // dividindo pelo espaço e criando um array com dois indices

  const [, token] = authHeader.split(" ");

  // variavel token e chave secreta
  try {
    const { sub: user_id } = verify(
      token,
      "e781afa549f45620d2a70fdb207e96d9"
    ) as IPayload;
    console.log(user_id);

    const usersRepository = new UsersRepository();

    const userExist = usersRepository.findById(user_id);

    if (!userExist) {
      throw new AppError("User does not exists!", 401);
    }
    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}

// A aplicação primeiro verifica se recebeu o token no header da requisição,
// se recebeu, então continua, caso contrário, gera uma exceção.
// Caso tenha recebido, a função verify do jwt, nos retorna algumas coisas,
// dentre elas, o id do usuario na propriedade sub do objeto retornado.
// Há então uma verificação se o id consta no banco de dados.
// Caso o id exista, a aplicação continua normal, caso contrário, gera uma exceção;
