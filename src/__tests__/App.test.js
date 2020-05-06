import React from "react";
import { render, fireEvent, screen, getByText } from "@testing-library/react";
import App from "../App";

test("should match the intial page render snapshot", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});

test("should match after movie deletion", () => {
  const { container, getByText } = render(<App />);
  const deleteButtons = screen.getAllByText("Delete");

  fireEvent.click(deleteButtons[0]);

  expect(getByText("Showing 8 movies in the database.")).toBeTruthy();

  expect(container.firstChild).toMatchSnapshot();
});

test("should match after all movies deleted", () => {
  const { container, getAllByText, getByText } = render(<App />);
  let deleteButtons = getAllByText(`Delete`);

  expect(getByText("Showing 9 movies in the database.")).toBeTruthy();

  fireEvent.click(deleteButtons[0]);
  expect(getByText("Showing 8 movies in the database.")).toBeTruthy();
  deleteButtons = getAllByText(`Delete`);

  fireEvent.click(deleteButtons[0]);
  expect(getByText("Showing 7 movies in the database.")).toBeTruthy();
  deleteButtons = getAllByText(`Delete`);

  fireEvent.click(deleteButtons[0]);
  expect(getByText("Showing 6 movies in the database.")).toBeTruthy();
  deleteButtons = getAllByText(`Delete`);

  fireEvent.click(deleteButtons[0]);
  expect(getByText("Showing 5 movies in the database.")).toBeTruthy();
  deleteButtons = getAllByText(`Delete`);

  fireEvent.click(deleteButtons[0]);
  expect(getByText("Showing 4 movies in the database.")).toBeTruthy();
  deleteButtons = getAllByText(`Delete`);

  fireEvent.click(deleteButtons[0]);
  expect(getByText("Showing 3 movies in the database.")).toBeTruthy();
  deleteButtons = getAllByText(`Delete`);

  fireEvent.click(deleteButtons[0]);
  expect(getByText("Showing 2 movies in the database.")).toBeTruthy();
  deleteButtons = getAllByText(`Delete`);

  fireEvent.click(deleteButtons[0]);
  expect(getByText("Showing 1 movies in the database.")).toBeTruthy();
  deleteButtons = getAllByText(`Delete`);

  fireEvent.click(deleteButtons[0]);
  expect(getByText("There are no movies in the database.")).toBeTruthy();

  expect(container.firstChild).toMatchSnapshot();
});

test("should match pagination", () => {
  const { container, getByText, getByTestId } = render(<App />);

  const pageTwoLink = getByTestId("page-2");
  fireEvent.click(pageTwoLink);

  expect(getByText("Airplane")).toBeTruthy();

  const pageThreeLink = getByTestId("page-3");
  fireEvent.click(pageThreeLink);

  expect(getByText("The Avengers")).toBeTruthy();

  expect(container.firstChild).toMatchSnapshot();
});

test("should match filtering", () => {
  const { container, queryAllByText, getByTestId } = render(<App />);

  const filterAll = getByTestId("filter-All");
  fireEvent.click(filterAll);

  expect(queryAllByText("Terminator").length).toBe(1);
  expect(queryAllByText("Get Out").length).toBe(1);
  expect(queryAllByText("Trip to Italy").length).toBe(1);

  const filterAction = getByTestId("filter-Action");
  fireEvent.click(filterAction);

  expect(queryAllByText("Terminator").length).toBe(1);
  expect(queryAllByText("Get Out").length).toBe(0);
  expect(queryAllByText("Trip to Italy").length).toBe(0);

  const filterThriller = getByTestId("filter-Thriller");
  fireEvent.click(filterThriller);

  expect(queryAllByText("Terminator").length).toBe(0);
  expect(queryAllByText("Get Out").length).toBe(1);
  expect(queryAllByText("Trip to Italy").length).toBe(0);

  const filterComedy = getByTestId("filter-Comedy");
  fireEvent.click(filterComedy);

  expect(queryAllByText("Terminator").length).toBe(0);
  expect(queryAllByText("Get Out").length).toBe(0);
  expect(queryAllByText("Trip to Italy").length).toBe(1);

  expect(container.firstChild).toMatchSnapshot();
});
