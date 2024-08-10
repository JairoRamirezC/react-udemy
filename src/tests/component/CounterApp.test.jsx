import { render, screen } from "@testing-library/react";
import { CounterApp } from "../../component/CounterApp";

describe('Testing at CounterApp component', () => {

  const value = 100;

  test('should match with snapshot', () => {
    const {container} = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the intial value 100', () => {
    render(<CounterApp value={value} />);
    
    expect(screen.getByText(value).innerHTML).toBe('100');
  });

});