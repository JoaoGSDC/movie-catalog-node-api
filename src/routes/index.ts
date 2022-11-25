import { Router } from 'express';
import { moviesRoutes } from './movies.routes';

const routes = Router();
routes.use('/movies', moviesRoutes);

export { routes };
