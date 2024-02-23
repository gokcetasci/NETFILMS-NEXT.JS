import React from 'react'
import { notFound } from 'next/navigation';
import MovieContainer from '@/containers/movie';
import Movies from "@/mocks/movies.json"

async function MoviePage({ params, searchParams }) {

    const movieDetail = Movies.results.find((movie) => movie.id.toString() === params.id );

    //movie detail olmadığında kullanıcıyı 404 sayfasına yönlendir

    if (!movieDetail) {
        notFound()
    }
    
    if(searchParams.error === 'true') {
        throw new Error("Error happened")
    }
  return (
    <div>
        <MovieContainer movie={movieDetail}/>
    </div>
  )
}

export default MoviePage