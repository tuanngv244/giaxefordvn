// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import { API_SERVER, Method } from "@/configs";
import Cookies from "cookies";

type Data = {
  message: string;
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
  if (req.method !== Method.POST)
    return res.status(404).json({ message: "Not found!" });

  return new Promise((resolve) => {
    //don't send cookie to API Server
    req.headers.cookie = "";

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      // custom response from response
      let body = "";
      proxyRes.on("data", function (chunk) {
        body += chunk;
      });
      proxyRes.on("end", function () {
        try {
          const { accessToken, expiredAt } = JSON.parse(body);

          // -------- //
          // convert token to cookies
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== "development",
          });
          if (cookies) {
            (cookies as any).set("access_token", accessToken, {
              httpOnly: true,
              sameSite: "lax",
              expires: new Date(expiredAt),
            });
          }
          // -------- //
          (res as NextApiResponse)
            .status(200)
            .json({ message: "Login successfully!" });
        } catch (err) {
          (res as NextApiResponse)
            .status(500)
            .json({ message: "Something went wrong!" });
        }

        resolve(1);
      });
    };

    proxy.once("proxyRes", handleLoginResponse);

    proxy.web(req, res, {
      target: API_SERVER,
      changeOrigin: true,
      selfHandleResponse: true, // property allow custom or auto
    });
  });
}
