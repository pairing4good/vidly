import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Movie from "../components/movie";

let firstMovie, secondMovie, thirdMovie;
let movies;
let eventHandler

beforeEach(() => {
  eventHandler = jest.fn(() => {});

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

  movies = [firstMovie, secondMovie, thirdMovie];
});

test("should display the first movie", () => {
  render(
    <table>
      <tbody>
        <Movie movie={firstMovie} movies={movies} callback={eventHandler} />
      </tbody>
    </table>
  );

  expect(screen.getAllByText(firstMovie.title)).toBeTruthy();
  expect(screen.getAllByText(firstMovie.genre.name)).toBeTruthy();
  expect(screen.getAllByText(firstMovie.numberInStock.toString())).toBeTruthy();
  expect(
    screen.getAllByText(firstMovie.dailyRentalRate.toString())
  ).toBeTruthy();

  const deleteButton = screen.getAllByText("Delete");

  expect(deleteButton[0]).toBeTruthy();

  fireEvent.click(deleteButton[0]);

  expect(eventHandler.mock.calls.length).toBe(1);
});
