import React from "react";
import { render, fireEvent, screen, getNodeText } from "@testing-library/react";
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

test("should match title sort", () => {
  const { getByTestId } = render(<App />);

  const filterAllAsc = getByTestId("title-heading");
  fireEvent.click(filterAllAsc);

  const firstTitleAsc = getByTestId("row0-title");
  expect(getNodeText(firstTitleAsc)).toBe("Airplane");

  const secondTitleAsc = getByTestId("row1-title");
  expect(getNodeText(secondTitleAsc)).toBe("Die Hard");

  const thirdTitleAsc = getByTestId("row2-title");
  expect(getNodeText(thirdTitleAsc)).toBe("Get Out");

  const fourthTitleAsc = getByTestId("row3-title");
  expect(getNodeText(fourthTitleAsc)).toBe("Gone Girl");

  const filterAllDesc = getByTestId("title-heading");
  fireEvent.click(filterAllDesc);

  const firstTitleDesc = getByTestId("row0-title");
  expect(getNodeText(firstTitleDesc)).toBe("Wedding Crashers");

  const secondTitleDesc = getByTestId("row1-title");
  expect(getNodeText(secondTitleDesc)).toBe("Trip to Italy");

  const thirdTitleDesc = getByTestId("row2-title");
  expect(getNodeText(thirdTitleDesc)).toBe("The Sixth Sense");

  const fourthTitleDesc = getByTestId("row3-title");
  expect(getNodeText(fourthTitleDesc)).toBe("The Avengers");
});

test("should match genre sort", () => {
  const { getByTestId } = render(<App />);

  const filterAllAsc = getByTestId("genre-heading");
  fireEvent.click(filterAllAsc);

  const firstRateAsc = getByTestId("row0-genre");
  expect(getNodeText(firstRateAsc)).toBe("Action");

  const secondRateAsc = getByTestId("row1-genre");
  expect(getNodeText(secondRateAsc)).toBe("Action");

  const thirdRateAsc = getByTestId("row2-genre");
  expect(getNodeText(thirdRateAsc)).toBe("Action");

  const fourthRateAsc = getByTestId("row3-genre");
  expect(getNodeText(fourthRateAsc)).toBe("Comedy");

  const filterAllDesc = getByTestId("genre-heading");
  fireEvent.click(filterAllDesc);

  const firstRateDesc = getByTestId("row0-genre");
  expect(getNodeText(firstRateDesc)).toBe("Thriller");

  const secondRateDesc = getByTestId("row1-genre");
  expect(getNodeText(secondRateDesc)).toBe("Thriller");

  const thirdRateDesc = getByTestId("row2-genre");
  expect(getNodeText(thirdRateDesc)).toBe("Thriller");

  const fourthRateDesc = getByTestId("row3-genre");
  expect(getNodeText(fourthRateDesc)).toBe("Comedy");
});

test("should match stock sort", () => {
  const { getByTestId } = render(<App />);

  const filterAllAsc = getByTestId("stock-heading");
  fireEvent.click(filterAllAsc);

  const firstGenreAsc = getByTestId("row0-stock");
  expect(getNodeText(firstGenreAsc)).toBe("4");

  const secondGenreAsc = getByTestId("row1-stock");
  expect(getNodeText(secondGenreAsc)).toBe("5");

  const thirdGenreAsc = getByTestId("row2-stock");
  expect(getNodeText(thirdGenreAsc)).toBe("6");

  const fourthGenreAsc = getByTestId("row3-stock");
  expect(getNodeText(fourthGenreAsc)).toBe("7");

  const filterAllDesc = getByTestId("stock-heading");
  fireEvent.click(filterAllDesc);

  const firstGenreDesc = getByTestId("row0-stock");
  expect(getNodeText(firstGenreDesc)).toBe("8");

  const secondGenreDesc = getByTestId("row1-stock");
  expect(getNodeText(secondGenreDesc)).toBe("7");

  const thirdGenreDesc = getByTestId("row2-stock");
  expect(getNodeText(thirdGenreDesc)).toBe("7");

  const fourthGenreDesc = getByTestId("row3-stock");
  expect(getNodeText(fourthGenreDesc)).toBe("7");
});


test("should match rate sort", () => {
  const { getByTestId } = render(<App />);

  const filterAllAsc = getByTestId("rate-heading");
  fireEvent.click(filterAllAsc);

  const firstGenreAsc = getByTestId("row0-rate");
  expect(getNodeText(firstGenreAsc)).toBe("2.5");

  const secondGenreAsc = getByTestId("row1-rate");
  expect(getNodeText(secondGenreAsc)).toBe("2.5");

  const thirdGenreAsc = getByTestId("row2-rate");
  expect(getNodeText(thirdGenreAsc)).toBe("3.5");

  const fourthGenreAsc = getByTestId("row3-rate");
  expect(getNodeText(fourthGenreAsc)).toBe("3.5");

  const filterAllDesc = getByTestId("rate-heading");
  fireEvent.click(filterAllDesc);

  const firstGenreDesc = getByTestId("row0-rate");
  expect(getNodeText(firstGenreDesc)).toBe("4.5");

  const secondGenreDesc = getByTestId("row1-rate");
  expect(getNodeText(secondGenreDesc)).toBe("3.5");

  const thirdGenreDesc = getByTestId("row2-rate");
  expect(getNodeText(thirdGenreDesc)).toBe("3.5");

  const fourthGenreDesc = getByTestId("row3-rate");
  expect(getNodeText(fourthGenreDesc)).toBe("3.5");
});