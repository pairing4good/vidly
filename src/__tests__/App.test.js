import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";

test("should match the intial page render snapshot", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});

test("should match after movie deletion", () => {
  const { container } = render(<App />);
  const deleteButtons = screen.getAllByText("Delete");

  fireEvent.click(deleteButtons[0]);

  expect(container.firstChild).toMatchSnapshot();
});

test("should match after all movies deleted", () => {
  const { container } = render(<App />);
  const deleteButtons = screen.getAllByText("Delete");

  deleteButtons.forEach((deleteButton) => {
    fireEvent.click(deleteButton);
  });

  expect(container.firstChild).toMatchSnapshot();
});
