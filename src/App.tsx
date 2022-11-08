import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <AppRoutes />
          <GlobalStyle />
        </ChakraProvider>
      </ThemeProvider>
    </Provider>


  );
}

export default App;
