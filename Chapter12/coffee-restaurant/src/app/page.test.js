import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './page';

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  it('displays the correct heading and intro', () => {
    render(<Home />);
    expect(screen.getByText('Summer time is here!')).toBeInTheDocument();
    expect(
      screen.getByText(
        /Our summer menu has arrived. Freshen up your day with our creamy and delicious coffee range, iced teas and mouth watering snacks./
      )
    ).toBeInTheDocument();
  });
});
