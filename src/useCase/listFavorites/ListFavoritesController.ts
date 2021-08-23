import { Request, Response } from "express";

import { ListFavoritesUseCase } from "./ListFavoritesUseCase";


class ListFavoritesController {
 constructor (private listFavoritesUseCase: ListFavoritesUseCase) {}

 handle (request: Request, response: Response): Response {
   // const { username } = request.headers;
   //username: String(username)

   const all = this.listFavoritesUseCase.execute();

  return response.json(all);
  
 }
}

export { ListFavoritesController }
