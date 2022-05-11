import { render, screen } from '@testing-library/react';
import Layout from '.';

describe('<Layout />', () => {
  let layout;
  beforeEach(() => {
    render(<Layout>Teste</Layout>);
    layout = screen.getByText('Teste');
  });

  it('should render Layout component', () => {
    expect(layout).toBeDefined();
  });
});
