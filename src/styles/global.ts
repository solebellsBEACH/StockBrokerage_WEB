import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }
body{
  background-color:red;
}

  body, input, button {
    font-family:'roboto-mono', sans-serif;
  }

  button {
    cursor: pointer;
  }

  // Adicione quais mais regras desejar!
`;