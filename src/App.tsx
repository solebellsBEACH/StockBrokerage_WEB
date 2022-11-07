import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/global"; 

function App() {

  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <AppRoutes />
        <GlobalStyle />
      </ChakraProvider>
    </ThemeProvider>


  );
}

export default App;
