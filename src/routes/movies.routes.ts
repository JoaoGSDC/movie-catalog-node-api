import { Router } from 'express';
import { GetMoviesController } from '../modules/movies/useCases/getMovies/GetMoviesController';
import { InsertMoviesController } from '../modules/movies/useCases/insertMovies/InsertMoviesController';

const getMoviesController = new GetMoviesController();
const insertMoviesController = new InsertMoviesController();

const moviesRoutes = Router();
moviesRoutes.get('/', getMoviesController.handle);
moviesRoutes.post('/', insertMoviesController.handle);

export { moviesRoutes };
