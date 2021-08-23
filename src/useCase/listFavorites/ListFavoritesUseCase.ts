import { Favorite } from "../../../model_favorites";
import { IFavoritesRepository } from "../../repositories/IFavoritesRepository";

// interface IRequest {
//  username: string;
// }

class ListFavoritesUseCase {
 constructor(private favoritesRepository: IFavoritesRepository) {}

 execute(): Favorite[] {
  const favorites = this.favoritesRepository.listFavoritesByUser();

  return favorites;
 }
}

export { ListFavoritesUseCase }
