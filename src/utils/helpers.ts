import useSWR from "swr";

export const fetcher = async (url: string) =>
  await fetch(url).then((res) => res.json());

export const useRestClient = (path: string, useRootPath = true) =>
  useSWR(
    `${!useRootPath ? path : process.env.NEXT_PUBLIC_BASE_API_URL}${path}`,
    fetcher
  );
