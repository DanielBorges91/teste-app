import Router from "express";
import { favoritesRoutes } from "./favorites.routes";

const router = Router();

router.use("/favorites", favoritesRoutes)

export { router }
