import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CI/CD Pipeline heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/React CI\/CD Pipeline with GitHub Actions/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders demo application text', () => {
  render(<App />);
  const textElement = screen.getByText(/This is a demo React application/i);
  expect(textElement).toBeInTheDocument();
});

test('renders pipeline features', () => {
  render(<App />);
  const featuresElement = screen.getByText(/Pipeline Features/i);
  expect(featuresElement).toBeInTheDocument();
});
