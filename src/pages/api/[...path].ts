// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
import { API_SERVER } from "@/configs";

type Data = {
  name: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  //don't send cookie to API Server
  req.headers.cookie = "";
  proxy.web(req, res, {
    target: process.env.NEXT_PUBLIC_BASE_API_SERVER_URL,
    changeOrigin: true,
    selfHandleResponse: false,
  });
}
