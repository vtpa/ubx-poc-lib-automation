import { render } from '@testing-library/react';
import App from './App';

test('will pass, I promisse', () => {
  render(<App />);
  expect(true).toBe(false);
});
