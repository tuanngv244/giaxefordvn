// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
import { API_SERVER } from "@/configs";
import Cookies from "cookies";

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
  return new Promise((resolve) => {
    // convert cookies to headers
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get("access_token");
    if (accessToken) {
      req.headers.authorization = `Bearer ${accessToken}`;
    }

    //don't send cookie to API Server
    req.headers.cookie = "";

    proxy.web(req, res, {
      target: API_SERVER,
      changeOrigin: true,
      selfHandleResponse: false,
    });
    proxy.once("proxyRes", () => {
      resolve(1);
    });
  });
}
