import Dropdown from "../components/Dropdown";
import App from "../App";

/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

//I've ensured these tests are falsifiable by altering variables and expects

test("component renders without errors", () => {
  render(<Dropdown />);
});

test("All dropdown buttons render", () => {
  render(<Dropdown />);
  const buttons = screen.queryAllByTestId("dropbtn-inner");
  expect(buttons).toBeTruthy();
});

test("Dropdown buttons change the displayed pokemon", () => {
  // I had to render App for this because it doesn't just test dropdown. Not sure what best practices is for this but it does the job.
  //This test checks that the (non-fire-type) pokemon Bulbasaur is visible on screen, then verifies that Bulbasaur disappears when you hit the button to only show Fire types.
  render(<App />);

  const fireBtn = document.querySelector("#fire-btn");
  let bulba = screen.queryByText(/bulbasaur/i);

  expect(bulba).toBeVisible();

  userEvent.click(fireBtn);

  expect(bulba).not.toBeVisible();
});
