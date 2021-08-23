import { FavoritesRepository } from "../../repositories/implementations/FavoritesRepository";
import { ListFavoritesController } from "./ListFavoritesController";
import { ListFavoritesUseCase } from "./ListFavoritesUseCase";

const favoritesRepository = FavoritesRepository.getInstance();
const listFavoritesUseCase = new ListFavoritesUseCase(favoritesRepository);
const listFavoritesController = new ListFavoritesController(listFavoritesUseCase);


export { listFavoritesController };
