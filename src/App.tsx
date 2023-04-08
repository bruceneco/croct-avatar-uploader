import { ThemeProvider } from "styled-components";
import { lightTheme } from "./style/light-theme";
import { GlobalStyle } from "./style/global";
import * as S from "./App.styles";
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <S.Main>Works.</S.Main>
    </ThemeProvider>
  );
}

export default App;
