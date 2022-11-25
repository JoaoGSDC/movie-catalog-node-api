import { Request, Response } from 'express';
import { GetMoviesUseCase } from './GetMoviesUseCase';

export class GetMoviesController {
  async handle(req: Request, res: Response) {
    const { page } = req.query;

    const getMoviesUseCase = new GetMoviesUseCase();
    const result = await getMoviesUseCase.execute(Number(page));

    return res.status(result.statusCode).json(result.data ?? result.message);
  }
}
