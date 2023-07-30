//@ts-nocheck
export const fetching = (...args: any) => {
  const { url, body, method, headers } = args;
  return fetch(url, {
    method: method ?? "GET",
    headers: headers,
    body: body,
  }).then((res) => res.json());
};
