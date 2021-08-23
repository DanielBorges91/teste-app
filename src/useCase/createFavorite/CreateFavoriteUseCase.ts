import { inject, injectable } from "tsyringe";
import { IFavoritesRepository } from "../../repositories/IFavoritesRepository";

interface IRequest {
 username: string;
 rating: number;
}

@injectable()
class CreateFavoriteUseCase {
 constructor(
  @inject("FavoritesRepository")
  private favoritesRepository: IFavoritesRepository) {}

 execute ({username, rating}: IRequest): void {
  this.favoritesRepository.create({username, rating});
 }
}

export { CreateFavoriteUseCase }
