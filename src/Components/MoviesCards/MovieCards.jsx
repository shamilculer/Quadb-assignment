import React from 'react'

import {MovieCard} from "../"

const MovieCards = ({data}) => {
  return (
    <section className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 px-16 py-32'>
           {data?.map((movie) => (
           <MovieCard movie={movie} key={movie.show.id}  />
            ))} 
    </section>
  )
}

export default MovieCards