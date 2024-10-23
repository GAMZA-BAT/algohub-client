import type { StorybookConfig } from "@storybook/nextjs";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "node:path";

const config: StorybookConfig = {
  // src폴더 내 모든 stories.ts|tsx, .mdx 파일 적용
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-storysource",
      options: {
        parser: "typescript",
        rule: {
          include: [path.resolve(__dirname, "../src")],
        },
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    "@storybook/addon-a11y",
    "@storybook/addon-designs",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "storybook-dark-mode",
    {
      name: "storybook-addon-jsdoc-to-mdx",
      options: {
        folderPaths: ["./src/"],
        extensions: ["ts"],
      },
    },
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        plugins: [new VanillaExtractPlugin(), new MiniCssExtractPlugin()],
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {},
              },
            ],
            exclude: /\.vanilla\.css$/,
          },
          {
            test: /\.vanilla\.css$/i,
            sideEffects: true,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve("css-loader"),
                options: {
                  url: false,
                },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal(config) {
    if (!config.module || !config.module.rules) {
      return config;
    }

    config.module.rules.push({
      test: /\.stories\.jsx?$/,
      use: [{ loader: require.resolve("@storybook/source-loader") }],
      enforce: "pre",
    });

    config.module.rules = [
      ...config.module.rules.map((rule) => {
        if (!rule || rule === "...") {
          return rule;
        }
        if (rule.test && /svg/.test(String(rule.test))) {
          return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
      }),
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ];

    if (config.resolve) {
      config.resolve.alias!["@"] = path.resolve(__dirname, "../src/");
    }

    return config;
  },
};
export default config;
