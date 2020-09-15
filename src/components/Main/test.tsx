import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /nextjs boilerplate/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Shoud render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
