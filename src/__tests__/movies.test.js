import React from "react";
import Movies from "../movies";

jest.mock("../services/fakeMovieService");
const mockMovieService = require("../services/fakeMovieService");

let moviesComponent;

beforeEach(() => {
  mockMovieService.getMovies.mockReturnValue([
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Terminator",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      numberInStock: 6,
      dailyRentalRate: 2.5,
      publishDate: "2018-01-03T19:04:28.809Z",
    },
    {
      _id: "5b21ca3eeb7f6fbccd471816",
      title: "Die Hard",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      numberInStock: 5,
      dailyRentalRate: 2.5,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471817",
      title: "Get Out",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
      numberInStock: 8,
      dailyRentalRate: 3.5,
    },
  ]);

  moviesComponent = new Movies();
});

test("should ", () => {
  const movieRows = moviesComponent.renderMovieRows();

  expect(movieRows.length).toBe(3);

  expect(movieRows[0].props.children[0]).toEqual(
    <td scope="row">Terminator</td>
  );
  expect(movieRows[0].props.children[1]).toEqual(<td>Action</td>);
  expect(movieRows[0].props.children[2]).toBe(<td>6</td>);
});
