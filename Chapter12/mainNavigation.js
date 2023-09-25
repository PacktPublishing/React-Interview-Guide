import Link from 'next/link';
import { styled } from 'styled-components';

const MainNavigation = styled.nav`
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  font-size: 2rem;
  padding: 1rem;
  background: rgb(250 250 250);
`;

export default function MainMenu() {
  return (
    <MainNavigation>
      <Link href="/">Home</Link>
      <Link href="/nutrition">Nutrition</Link>
      <Link href="/account/menu">Menu</Link>
      <Link href="/account/profile">Profile</Link>
    </MainNavigation>
  );
}
