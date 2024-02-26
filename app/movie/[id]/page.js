import React from "react";
import { notFound } from "next/navigation";
import MovieContainer from "@/containers/movie";
import {getMovie} from "@/services/movie"

async function MoviePage({ params, searchParams }) {

  const movieDetail = await getMovie(params.id)

  if (!movieDetail) {
    notFound();
  } 

  return (
    <div>
      <MovieContainer movie={movieDetail} />
    </div>
  );
}

export default MoviePage;
