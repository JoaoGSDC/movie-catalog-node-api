import connectToDatabase from '../../../../services/connection';
import { MoviesDTO } from '../../dtos/MoviesDTO';
import { Db } from 'mongodb';
import { IResponse } from '../../../../interfaces/IResponse';

export class GetMoviesUseCase {
  async execute(page: number): Promise<IResponse> {
    const LIMIT = 10;
    const DESC = 1;

    let response: IResponse = {} as IResponse;

    try {
      const db: Db = await connectToDatabase(process.env.MONGODB_URI);

      const moviesCollection = db.collection('movies');

      const currentPage = page * LIMIT;

      const moviesResult = (await moviesCollection
        .find()
        .sort({
          title: DESC,
        })
        .limit(LIMIT)
        .skip(currentPage)
        .toArray()) as any;

      response = { statusCode: 200, data: moviesResult, message: 'Lista de filmes carregados com sucesso! :D' };
    } catch (err) {
      console.log(err);
      response = { statusCode: 500, message: 'Erro ao carregar os filmes! :(' };
    }

    return response;
  }
}
