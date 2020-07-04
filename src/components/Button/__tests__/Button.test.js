import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Button from '../Button';

afterEach(cleanup);

describe('(Component) Button', () => {
  test('should render without crash', async () => {
    const FragmentToTest = () => (
      <Button dataTestId="btn">Test Children</Button>
    );

    const { getByTestId } = render(<FragmentToTest />);

    expect(getByTestId('btn')).toBeTruthy();
  });
});
