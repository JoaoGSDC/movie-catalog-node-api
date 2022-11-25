import { describe, expect, test } from '@jest/globals';
import { InsertMoviesUseCase } from './InsertMoviesUseCase';

describe('InsertMovies', () => {
  test('should return positive message', async () => {
    const insertMoviesUseCase = new InsertMoviesUseCase();
    const result = await insertMoviesUseCase.execute();

    expect(result.message).toBe('Filmes adicionados com sucesso! :D');
  });
});
