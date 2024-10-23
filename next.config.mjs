/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  webpack(config) {
    // SVG imports를 처리하는 기존 규칙 가져오기
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

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

    return config;
  },
};

export default withVanillaExtract(nextConfig);
