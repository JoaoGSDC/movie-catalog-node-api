import { describe, expect, test } from '@jest/globals';
import { InsertMoviesUseCase } from '../insertMovies/InsertMoviesUseCase';
import { GetMoviesUseCase } from './GetMoviesUseCase';

describe('GetMovies', () => {
  test('should return positive message', async () => {
    const page = 0;

    const insertMoviesUseCase = new InsertMoviesUseCase();
    await insertMoviesUseCase.execute();

    const getMoviesUseCase = new GetMoviesUseCase();
    const result = await getMoviesUseCase.execute(page);

    expect(result.message).toBe('Lista de filmes carregados com sucesso! :D');
  });
});
