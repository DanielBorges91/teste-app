import { Router } from "express";
import { CreateFavoriteController } from "../useCase/createFavorite/CreateFavoriteController";

import { listFavoritesController } from "../useCase/listFavorites";


const favoritesRoutes = Router();

const createFavoritesController = new CreateFavoriteController();

favoritesRoutes.post("/favorites", (request, response) => {
 return createFavoritesController.handle(request, response);
});

favoritesRoutes.get("/favorites", (request, response) => {
 return listFavoritesController.handle(request, response);
})

export { favoritesRoutes }
