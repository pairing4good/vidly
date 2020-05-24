import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  genre: Yup.string()
    .required()
    .oneOf(["Action", "Thriller", "Comedy"])
    .label("Genre"),
  numberInStock: Yup.number().moreThan(0).required().label("Number in Stock"),
  dailyRentalRate: Yup.number().moreThan(0).required().label("Rate"),
});

const MovieForm = ({ match, history }) => {
  const movieId = match.params.id;

  const movie = getMovie(movieId);

  const formik = useFormik({
    initialValues: {
      title: movie.title,
      genre: movie.genre.name,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const selectedGenre = getGenres().find((g) => g.name === values.genre);

      movie.title = values.title;
      movie.genre = selectedGenre;
      movie.numberInStock = values.numberInStock;
      movie.dailyRentalRate = values.dailyRentalRate;

      saveMovie({ ...movie });
    },
  });

  return (
    <div>
      <h1>Movie Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div class="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            className={
              formik.errors.title ? "form-control is-invalid" : "form-control"
            }
          />
          {formik.errors.title ? (
            <div class="invalid-feedback">{formik.errors.title}</div>
          ) : null}
        </div>
        <div class="form-group">
          <label htmlFor="genre">Genre</label>
          <select
            id="genre"
            name="genre"
            onChange={formik.handleChange}
            value={formik.values.genre}
            className={
              formik.errors.genre ? "form-control is-invalid" : "form-control"
            }
          >
            <option>- Select One -</option>
            <option>Action</option>
            <option>Comedy</option>
            <option>Thriller</option>
          </select>

          {formik.errors.genre ? (
            <div class="invalid-feedback">{formik.errors.genre}</div>
          ) : null}
        </div>
        <div class="form-group">
          <label htmlFor="numberInStock">Number in Stock</label>
          <input
            id="numberInStock"
            name="numberInStock"
            onChange={formik.handleChange}
            value={formik.values.numberInStock}
            type="number"
            className={
              formik.errors.numberInStock
                ? "form-control is-invalid"
                : "form-control"
            }
          />

          {formik.errors.numberInStock ? (
            <div class="invalid-feedback">{formik.errors.numberInStock}</div>
          ) : null}
        </div>
        <div class="form-group">
          <label htmlFor="dailyRentalRate">Rate</label>
          <input
            id="dailyRentalRate"
            name="dailyRentalRate"
            onChange={formik.handleChange}
            value={formik.values.dailyRentalRate}
            type="number"
            className={
              formik.errors.dailyRentalRate
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {formik.errors.dailyRentalRate ? (
            <div class="invalid-feedback">{formik.errors.dailyRentalRate}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MovieForm;
