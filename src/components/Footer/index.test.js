import { fireEvent, render, screen } from "@testing-library/react"
import Footer from "."
import { ThemeProvider } from "../../utils/context";

describe('Footer', () => {
  it('should change theme', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
    const nightModeBtn = screen.getByRole('button');
    expect(nightModeBtn.textContent).toBe('Changer de mode: ☀️');
    fireEvent.click(nightModeBtn);
    expect(nightModeBtn.textContent).toBe('Changer de mode: 🌙');
  })
})