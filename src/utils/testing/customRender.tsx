import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../style/light-theme";
import { ReactNode } from "react";

export const customRender = (component: ReactNode) => {
  return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
};
