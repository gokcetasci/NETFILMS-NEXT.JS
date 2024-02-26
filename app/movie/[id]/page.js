import React from "react";
import { notFound } from "next/navigation";
import MovieContainer from "@/containers/movie";

const API_URL = "https://api.themoviedb.org/3"

const getMovie = async (movieId) => {
    const res = await fetch (`${API_URL}/movie/${movieId}?api_key=${process.env.API_KEY}&page=1`);
    return await res.json();
}

async function MoviePage({ params, searchParams }) {

  const movieDetail = await getMovie(params.id)

  if (!movieDetail) {
    notFound();
  } //movie detail olmadığında kullanıcıyı 404 sayfasına yönlendir

  if (searchParams.error === "true") {
    throw new Error("Error happened");
  }

  return (
    <div>
      <MovieContainer movie={movieDetail} />
    </div>
  );
}

export default MoviePage;
