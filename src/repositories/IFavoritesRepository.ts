import { Favorite } from "../../model_favorites"

interface IFavoritesDTO {
 username: string;
 rating: number;
}


interface IFavoritesRepository {
 create({username, rating}: IFavoritesDTO): void;
 listFavoritesByUser(): Favorite[]; 
}

export{IFavoritesDTO, IFavoritesRepository}
