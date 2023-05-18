import { fireEvent, render, screen } from "@testing-library/react"
import Card from "."
import { ThemeProvider } from "../../utils/context";

describe('Card component', () => {
  it('should render an image', () => {
    render(
      <ThemeProvider>
        <Card label="Test card label" title="Test card title" picture="test-card-img.png" />
      </ThemeProvider>
    );

    const img = screen.getByRole('img');
    expect(img.getAttribute('src')).toBe('test-card-img.png');
  })
  it('should render a title as passed in props, theb add a profile as favorite, then remove it from favorites', () => {
    render(
      <ThemeProvider>
        <Card label="Test card label" title="Test card title" picture="test-card-img.png" />
      </ThemeProvider>
    );

    const title = screen.getByText('Test card title');
    const parentDiv = title.closest('div');

    expect(title.textContent).toBeTruthy();

    fireEvent.click(parentDiv);
    expect(title.textContent).toBe('Test card title ⭐️');

    fireEvent.click(parentDiv);
    expect(title.textContent).toBe('Test card title');
  })
})