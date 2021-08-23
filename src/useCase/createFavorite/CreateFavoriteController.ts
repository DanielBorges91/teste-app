import { Request, Response } from "express";
import { container } from "tsyringe"

import { CreateFavoriteUseCase } from "./CreateFavoriteUseCase";


class CreateFavoriteController {

 constructor(private createFavoriteUseCase: CreateFavoriteUseCase) {}

 async handle(request: Request, response: Response): Promise<Response> {
  const { username, rating } = request.body;

  const createFavoriteUseCase = container.resolve(CreateFavoriteUseCase)

  createFavoriteUseCase.execute({ username, rating });

  return response.status(201).send();
 }
}

export  {CreateFavoriteController }
