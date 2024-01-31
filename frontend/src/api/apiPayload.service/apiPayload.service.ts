export const apiPayload = (options: RequestInit = {}) => {
  const { method = 'GET', headers: optionHeaders, body, ...remainingOptions } = options;

  const defaultHeaders = {
    Accept: 'application/json',
    'Access-Control-Request-Method': method,
    'Content-Type': 'application/json',
  };

  const headers = new Headers({ ...defaultHeaders, ...optionHeaders });

  return {
    method,
    headers,
    body: JSON.stringify(body),
    ...remainingOptions,
  } as RequestInit;
};

export default apiPayload;
