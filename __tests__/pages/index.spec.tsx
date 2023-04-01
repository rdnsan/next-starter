import Home from '@/pages';
import { render } from '@testing-library/react';

describe('Home Page', () => {
  it('render heading', () => {
    const { getByRole } = render(<Home />);

    const headingElement = getByRole('heading', {
      name: /Welcome to Next.js/i,
    });

    expect(headingElement).toBeInTheDocument();
  });
});
