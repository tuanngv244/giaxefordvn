import useSWR from "swr";

export const fetcher = async (...args: any[]) =>
  await fetch(...args).then((res) => res.json());

export const useRestClient = (path: string, useRootPath = true) =>
  useSWR(
    `${!useRootPath ? path : process.env.NEXT_PUBLIC_BASE_API_URL}${path}`,
    fetcher
  );
