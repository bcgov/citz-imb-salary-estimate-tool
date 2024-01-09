import { apiCall } from '../apiCall.service/apiCall.service';
import { apiPayload } from '../apiPayload.service/apiPayload.service';

interface IBaseItem {
  id: string;
}

export class Api {
  private baseUrl: string;

  private payload: RequestInit;

  get: <TDataType>(endPoint: string) => Promise<TDataType[]>;

  post: (url: string, body: unknown) => Promise<void>;

  patch: (url: string, body: unknown) => Promise<void>;

  delete: (url: string, body: unknown) => Promise<void>;

  constructor(apiConfig: { baseUrl: string; headers: HeadersInit }) {
    const { baseUrl, headers } = apiConfig;
    this.baseUrl = baseUrl;
    this.payload = apiPayload({ headers });

    this.get = async <TDataType>(endPoint: string) => {
      const response = await apiCall(
        `${this.baseUrl}/${endPoint}`,
        this.payload
      );

      return response as TDataType[];
    };

    this.post = async (endPoint, body) => {
      this.payload.method = 'POST';
      this.payload.body = JSON.stringify(body);

      await apiCall(`${this.baseUrl}/${endPoint}`, this.payload);
    };

    this.patch = async (endPoint, body) => {
      const { id } = body as IBaseItem;
      this.payload.method = 'PATCH';
      this.payload.body = JSON.stringify(body);

      await apiCall(`${this.baseUrl}/${endPoint}/${id}`, this.payload);
    };

    this.delete = async (endPoint, id) => {
      this.payload.method = 'DELETE';

      await apiCall(`${this.baseUrl}/${endPoint}/${id}`, this.payload);
    };
  }
}

export default Api;
