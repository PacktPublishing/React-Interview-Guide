import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nutrition from './page';

describe('Nutrition', () => {
  it('renders without crashing', () => {
    render(<Nutrition />);
  });

  it('displays the correct title and intro', () => {
    render(<Nutrition />);
    expect(
      screen.getByText('Nutrition is good for health and diet!')
    ).toBeInTheDocument();
  });
});
