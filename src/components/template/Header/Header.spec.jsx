import { render, screen } from '@testing-library/react';
import Header from '.';

describe('<Header />', () => {
  let header;
  beforeEach(() => {
    render(<Header>Teste</Header>);
    header = screen.getByText('Teste');
  });

  it('should render Header component', () => {
    expect(header).toBeDefined();
  });
});
