import { container } from "tsyringe";

import { FavoritesRepository } from "../../repositories/implementations/FavoritesRepository";
import { IFavoritesRepository } from "../../repositories/IFavoritesRepository";




container.registerSingleton<IFavoritesRepository>(
 "FavoritesRepository",
 FavoritesRepository
)
