import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Counter from './Counter';

describe('Counter component', () => {
  test('renders Counter component', () => {
    render(<Counter />);

    expect(screen.getByText(/Counter:/i)).toBeInTheDocument();
  });

  test('increases the count when the Increment button is clicked', () => {
    render(<Counter />);

    fireEvent.click(screen.getByText(/Increment/i));

    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
  });

  test('decreases the count when the Decrement button is clicked', () => {
    render(<Counter />);

    fireEvent.click(screen.getByText(/Increment/i));

    fireEvent.click(screen.getByText(/Decrement/i));

    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
  });
});
