import Home from './'
import { MemoryRouter } from "react-router-dom"
import { ThemeProvider } from "../../utils/context"
import { render, screen } from '@testing-library/react'

describe("Home page", () => {
  it('should render title', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', { level: 2, text: 'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents' })
    ).toBeTruthy()
  })
})