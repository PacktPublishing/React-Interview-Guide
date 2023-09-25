'use client';
import { styled, ThemeProvider } from 'styled-components';
import GlobalStyle from '../../src/app/components/GlobalStyles';
import MainMenu from './components/MainMenu';

const theme = {
  colors: {
    primary: 'rgb(15 23 42)',
  },
};

const MainContainer = styled.div`
  margin: 2rem auto;
  max-width: 120rem;
  padding: 2rem;
  width: 100%;
`;

const PageTitle = styled.h1`
  color: #ffffff;
`;

const PageIntro = styled.p`
  color: #ffffff;
  margin-top: 2rem;
  font-size: 1.4rem;
`;

export default function NotFound() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainMenu />
        <MainContainer>
          <PageTitle>Page Not Found</PageTitle>
          <PageIntro>Could not find requested page :(</PageIntro>
        </MainContainer>
      </ThemeProvider>
    </>
  );
}
