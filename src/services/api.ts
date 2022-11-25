export class Api {
  async get(route: string, config?: any) {
    const configuration = {
      ...config,
      method: 'GET',
    };

    let params = this._handleSetParamsValue(config.params);

    const url = `${process.env.BASE_URL}${route}${params}`;
    const res = await fetch(url, configuration);
    const data = res.json();

    return data;
  }

  _handleSetParamsValue(configParams: any): string {
    let params = '';

    if (!configParams) {
      return params;
    }

    Object.keys(configParams).map((key, index) => {
      if (index === 0) {
        params = `?${key}=${configParams[key]}`;
      } else {
        params += `&${key}=${configParams[key]}`;
      }
    });

    return params;
  }
}
