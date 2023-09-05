// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Method } from "@/configs";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      data: any[];
      pagination: any;
    }
  | { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== Method.GET)
    return res.status(404).json({ message: "Not found!" });

  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const responseJSON = await response.json();
  res
    .status(200)
    .json({ data: responseJSON?.data, pagination: responseJSON?.pagination });
}

// proxy server --> http-proxy
