import { Api } from '../../../../services/api';
import connectToDatabase from '../../../../services/connection';
import { MoviesDTO } from '../../dtos/MoviesDTO';
import { Db } from 'mongodb';
import { IResponse } from '../../../../interfaces/IResponse';

export class InsertMoviesUseCase {
  async execute(): Promise<IResponse> {
    const LIMIT = 50;

    const api = new Api();
    let films: MoviesDTO[] = [];

    let response: IResponse = {} as IResponse;

    try {
      films = await api.get('films', {
        params: {
          fields: 'id,title,description,movie_banner,image,director,producer',
          limit: LIMIT,
        },
      });

      const db: Db = await connectToDatabase(process.env.MONGODB_URI);

      const moviesCollection = db.collection('movies');

      films.forEach(async (movie) => moviesCollection.insertOne(movie));

      response = { statusCode: 201, message: 'Filmes adicionados com sucesso! :D' };
    } catch (err) {
      console.log(err);
      response = { statusCode: 500, message: 'Erro ao adicionar filmes! :(' };
    }

    return response;
  }
}
