import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { GlobalStyle } from "../src/style/global";
import { lightTheme } from "../src/style/light-theme";
import { ThemeProvider } from "styled-components";

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: GlobalStyle,
      themes: { light: lightTheme },
      defaultTheme: "light",
      Provider: ThemeProvider,
    }),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
