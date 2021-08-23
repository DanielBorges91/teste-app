import { getRepository, Repository } from "typeorm";

import { Favorite } from "../../../model_favorites";
import { IFavoritesDTO, IFavoritesRepository } from "../IFavoritesRepository";


class FavoritesRepository {

 private favorites: Repository<Favorite>;
  
 constructor() {
  this.favorites = getRepository(Favorite);
 }

//  public static getInstance(): FavoritesRepository {
//   if (!FavoritesRepository.INSTANCE) {
//     FavoritesRepository.INSTANCE = new FavoritesRepository();
//   }
//   return FavoritesRepository.INSTANCE;
// }

 create({ username, rating }: IFavoritesDTO): void {
  const favorite = new Favorite();

  Object.assign(favorite, {
   username,
   rating,
  });

  this.favorites.push(favorite);
}

 listFavoritesByUser(): Favorite[] {
  // const favorites = this.favorites.filter((favorite) => favorite.username === username);

  const result = this.favorites;

  return result;
 }
}

export { FavoritesRepository }
