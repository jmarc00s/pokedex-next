import { fireEvent, render, screen } from '@testing-library/react';
import FabButton from '.';

describe('<FabButton />', () => {
  const onClickMock = jest.fn();
  let button;
  beforeEach(() => {
    render(<FabButton onClick={onClickMock} />);
    button = screen.getByRole('button');
  });

  it('should render fabButton component', () => {
    expect(button).toBeTruthy();
  });

  //   it('should render icon inside button', () => {});

  it('should call onClick callback', () => {
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
