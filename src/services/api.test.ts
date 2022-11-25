import { describe, expect, test } from '@jest/globals';
import { Api } from './api';

describe('API', () => {
  const api = new Api();

  const params = {
    fields: 'id,title,description,movie_banner,image,director,producer',
    limit: 1,
  };

  test('should return the request params', () => {
    const urlParams = api._handleSetParamsValue(params);
    expect(urlParams).toBe('?fields=id,title,description,movie_banner,image,director,producer&limit=1');
  });

  test('should return items in films api', async () => {
    const data = await api.get('films', { params });
    expect(data.length).toBe(1);
  });
});
