import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: linear-gradient(to bottom, #2e5575, #4e4276);
    background-repeat: no-repeat;
    min-height: 100vh; 
    font-family: 'Source Sans Pro', sans-serif;
  }
  * {
      box-sizing: border-box;
  }
`;
 
export default GlobalStyle;