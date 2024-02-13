import { httpStatusCode } from '@/utils';

export const apiCall = async (url: string, payload: RequestInit) => {
  const response = await fetch(url, payload);

  if (response.ok) {
    if (response.status === httpStatusCode.NO_CONTENT) return [];

    const data = await response.json();

    return data;
  }

  const error = await response.json();
  console.error('Server Error Message:', error);

  throw new Error(response.statusText);
};

export default apiCall;
