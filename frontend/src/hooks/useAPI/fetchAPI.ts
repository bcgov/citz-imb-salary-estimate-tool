const fetchAPI = async (endPoint: string, options: RequestInit) => {
  const url = `/api/${endPoint}`;
  const response = await fetch(url, options);

  if (response.ok) {
    if (options?.method?.toLowerCase() === 'delete') return null;

    const payload = await response.json();

    return payload;
  }

  throw new Error(response.statusText);
};

export default fetchAPI;
