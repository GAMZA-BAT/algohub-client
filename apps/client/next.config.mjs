/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();
import { WebpackGenerateEventPlugin } from "./src/sdk/webpackGenerateEventPlugin.cjs";

const isProd = process.env.NEXT_PUBLIC_APP_ENV === "production";
const hostname = isProd ? "algohubbucket.s3.ap-northeast-2.amazonaws.com" : "storage.hwangdo.kr";

const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000", // For local development
        "https://probable-space-computing-machine-95jq965wq4phvpp-3000.app.github.dev", // For GitHub Codespaces
      ]
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "algohubbucket.s3.ap-northeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "storage.hwangdo.kr",
      },
    ],
  },
  reactStrictMode: false,
  webpack(config) {
    // SVG imports를 처리하는 기존 규칙 가져오기
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

    config.module.rules.push(
      // svg imports 중 ?url로 끝나는 것에 대해서만 기존 규칙을 재적용
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // *.svg imports를 React 컴포넌트로 변환
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // 처리가 완료된 *.svg를 무시하도록 파일 로더 규칙을 수정
    fileLoaderRule.exclude = /\.svg$/i;

    config.plugins.push(new WebpackGenerateEventPlugin());

    return config;
  },
};

export default withVanillaExtract(nextConfig);
