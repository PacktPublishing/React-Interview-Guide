import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-size: 1rem;
    background: rgb(6 78 59);
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
