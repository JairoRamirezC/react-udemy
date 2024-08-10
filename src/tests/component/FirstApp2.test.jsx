import { render, screen } from "@testing-library/react";
import { FirstApp } from "../../component";

describe('Testing at FirstApp2', () => {

  const title = 'Hola, soy Goku';
  const subtitle = 'Mensaje segundario';

  test('should match with the snapshot', () => {
    const {container} = render(<FirstApp title={title} name="si como no"/>);
    expect(container).toMatchSnapshot();
  });

  test('should show the message "Hola, soy Goku"', () => {
    render(<FirstApp title={title} name="si como no"/>);
    const h1 = screen.getByTestId('text-title');
    expect(h1.textContent).toBe(title);
  });

  test('should show the title into H1 tag', () => {
    render(<FirstApp title={title} name="si como no"/>);
    const h1Title = screen.getByTestId('text-title');
    expect(h1Title.tagName).toBe('H1');
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
  });

  test('should show the subtitle send by props', () => {
    render(<FirstApp title={title} subtitle={subtitle} name="si como no"/>);
    expect(screen.getAllByText(subtitle)).toHaveLength(1);
  });

});