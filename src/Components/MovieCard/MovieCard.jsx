import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
    const {show} = movie
    const {medium} = show.image
    const {name, language, genres, id} = show
  
   return (
        <article className='p-3 bg-[var(--color-black)] rounded-xl'>
            <div className='mb-2'>
                <img src={medium} alt={name} />
            </div>
            <div>
                <h4 className='text-xl font-[400]'>{name}</h4>
                <span className='font-[300] text-[var(--color-grey)] text-sm'>{language}</span>  
                <div>
                   {genres?.map((genre, i) =>(
                    <span key={i} className='font-[300] text-[var(--color-grey)] text-sm mr-2'>{genre}</span>
                    ))} 
                </div>
                
                <Link to={`/${id}`}><button className='bg-[var(--color-body)] mt-2 py-1 px-2 rounded-lg text-sm'>View Sumary</button></Link>
            </div>
        </article>
  )
}

export default MovieCard