/** @type {import('next').NextConfig} */
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "components")],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["http://47.93.17.251:9005", "*.my-proxy.com"],
    },
  },
  // webpack: (
  //   config,
  //   { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  // ) => {
  //   console.log("webpack", Object.keys(config));
  //   // Important: return the modified config
  //   return {
  //     ...config,
  //     devServer: {
  //       // 在开发环境下，使用代理
  //       port: 4002,
  //       proxy: {
  //         // 选项写法
  //         "/api": {
  //           target: "http://47.93.17.251:9005", // 目标地址
  //           changeOrigin: true, // 开启代理，在本地创建一个虚拟服务器，然后发送请求的数据，会同时会收到请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
  //           pathRewrite: {
  //             "^/api": "/api", // 路径重写，移除路径中的/api
  //           },
  //         },
  //       },
  //     },
  //   };
  // },
};

module.exports = nextConfig;
