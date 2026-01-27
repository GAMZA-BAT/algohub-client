import type { Preview } from "@storybook/react";
import DocsPage from "./DocsPage";
import WithAppRouterContext from "./WithAppRouterContext";
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
    nextjs: {
      appDirectory: true,
    },
    docs: {
      page: DocsPage,
    },
  },
  decorators: [WithAppRouterContext],
};

export default preview;
