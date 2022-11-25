import { Request, Response } from 'express';
import { InsertMoviesUseCase } from './InsertMoviesUseCase';

export class InsertMoviesController {
  async handle(req: Request, res: Response) {
    const insertMoviesUseCase = new InsertMoviesUseCase();
    const result = await insertMoviesUseCase.execute();

    return res.status(result.statusCode).json(result.message);
  }
}
