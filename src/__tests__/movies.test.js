import React from "react";
import { render, screen } from "@testing-library/react";
import Movies from "../components/movies";

jest.mock("../services/fakeMovieService");
const mockMovieService = require("../services/fakeMovieService");

let moviesComponent;
let firstMovie, secondMovie, thirdMovie;

beforeEach(() => {
  firstMovie = {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
  };

  secondMovie = {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  };

  thirdMovie = {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
  };

  mockMovieService.getMovies.mockReturnValue([
    firstMovie,
    secondMovie,
    thirdMovie,
  ]);

  moviesComponent = new Movies();
});

test("should display the first movie", () => {
  render(<Movies />);

  expect(screen.getAllByText(firstMovie.title)).toBeTruthy();
  expect(screen.getAllByText(firstMovie.genre.name)).toBeTruthy();
  expect(screen.getAllByText(firstMovie.numberInStock.toString())).toBeTruthy();
  expect(
    screen.getAllByText(firstMovie.dailyRentalRate.toString())
  ).toBeTruthy();
});

test("should display the second movie", () => {
  render(<Movies />);

  expect(screen.getAllByText(secondMovie.title)).toBeTruthy();
  expect(screen.getAllByText(secondMovie.genre.name)).toBeTruthy();
  expect(
    screen.getAllByText(secondMovie.numberInStock.toString())
  ).toBeTruthy();
  expect(
    screen.getAllByText(secondMovie.dailyRentalRate.toString())
  ).toBeTruthy();
});

test("should display the third movie", () => {
  render(<Movies />);

  expect(screen.getAllByText(thirdMovie.title)).toBeTruthy();
  expect(screen.getAllByText(thirdMovie.genre.name)).toBeTruthy();
  expect(screen.getAllByText(thirdMovie.numberInStock.toString())).toBeTruthy();
  expect(
    screen.getAllByText(thirdMovie.dailyRentalRate.toString())
  ).toBeTruthy();
});
