import type { Preview } from "@storybook/react";

import {
  withThemeByClassName,
  withThemeFromJSXProvider,
} from "@storybook/addon-themes";
import { ConfigProvider } from "antd";
import { getThemeConfig } from "../constants/theme";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      Provider: ConfigProvider,
      defaultTheme: "light",
      themes: {
        light: getThemeConfig("light"),
        dark: getThemeConfig("dark"),
      },
    }),
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
