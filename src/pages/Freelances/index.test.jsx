import { screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render } from "../../utils/tests";
import Freelances from ".";

const freelancersMockedData = [
  {
    name: 'Harry Potter',
    job: 'Magicien frontend',
    picture: '',
  },
  {
    name: 'Hermione Granger',
    job: 'Magicienne fullstack',
    picture: '',
  },
]

const server = setupServer(
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    return res(ctx.json({ freelancersList: freelancersMockedData }))
  })
)
beforeAll(() => server.listen())
beforeEach(() => server.resetHandlers())
afterAll(() => server.close())

it("should display a loader, then freelancers names", async () => {
  render(<Freelances />)
  expect(screen.getByTestId('loader')).toBeTruthy();

  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))

  await waitFor(() => {
    expect(screen.getByText('Harry Potter')).toBeTruthy();
    expect(screen.getByText('Hermione Granger')).toBeTruthy();
  })
})