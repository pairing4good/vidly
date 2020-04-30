import React from "react";
import { render, screen } from "@testing-library/react";
import NoMovies from "../components/noMovies";

test("should display no movie message", () => {
  render(<NoMovies />);

  expect(screen.getAllByText("There are no movies in the database.")).toBeTruthy();
});
