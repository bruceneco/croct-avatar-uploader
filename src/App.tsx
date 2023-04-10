import { ThemeProvider } from "styled-components";
import AvatarUploader from "./components/AvatarUploader";
import { GlobalStyle } from "./style/global";
import { lightTheme } from "./style/light-theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <AvatarUploader onUpload={console.log} />
    </ThemeProvider>
  );
}

export default App;
