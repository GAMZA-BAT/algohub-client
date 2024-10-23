import { theme } from "@/styles/themes.css";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/styles/globalStyles.css";
import DocsPage from "./DocsPage";
import decorators from "./decorators";
import customViewports from "./viewport";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...customViewports,
      },
    },
    darkMode: {
      dark: { ...themes.dark, appBg: theme.color.black },
      light: { ...themes.normal, appBg: theme.color.white },
    },
    nextjs: {
      appDirectory: true,
    },
    docs: {
      page: DocsPage,
    },
  },
  decorators: [decorators],
};

export default preview;
