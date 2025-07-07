import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});