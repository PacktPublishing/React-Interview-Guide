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
  margin: 0 auto;
  width: 100%;
`;

const CoverHeadingBG = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: rgb(6 95 70);
  color: rgb(255 255 255);
  border-radius: 2rem;
  padding: 2rem;
`;

const CoverHeading = styled.h1`
  text-transform: uppercase;
`;

const CoverIntro = styled.p`
  font-size: 1.4rem;
  margin: 2rem 2rem;
`;

const Hero = styled.div`
  margin: 2rem auto;
  background-image: url('https://res.cloudinary.com/d74fh3kw/image/upload/v1692557430/coffee-restaurant/coffee-shop_zlkf7u.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgb(4 120 87);
  height: 67.5rem;
  width: 100%;
`;

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainContainer>
          <MainMenu />
          <CoverHeadingBG>
            <CoverHeading>Summer time is here!</CoverHeading>
            <CoverIntro>
              Our summer menu has arrived. Freshen up your day with our creamy
              and delicious coffee range, iced teas and mouth watering snacks.
            </CoverIntro>
          </CoverHeadingBG>
          <Hero></Hero>
        </MainContainer>
      </ThemeProvider>
    </>
  );
}
