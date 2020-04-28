import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('should match the intial page render snapshot', () => {
  const { container } = render(<App />)
  expect(container.firstChild).toMatchSnapshot();
});
