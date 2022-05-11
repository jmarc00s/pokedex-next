import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  const onClickMock = jest.fn();

  beforeEach(() => {
    render(<Button onClick={onClickMock}>Teste</Button>);
  });

  it('should render button component', () => {
    const button = screen.getByRole('button', { name: 'Teste' });
    expect(button).toBeTruthy();
  });

  it('should emit onClick event', () => {
    const button = screen.getByRole('button', { name: 'Teste' });
    fireEvent.click(button);
    expect(onClickMock).toBeCalled();
  });
});
