import { Api } from './api.class';

export const createApi = (
  apiConfig: { baseUrl?: string; headers?: HeadersInit } = {}
) => {
  const { baseUrl = '/api', headers = {} } = apiConfig;

  return new Api({ baseUrl, headers });
};

export default createApi;
