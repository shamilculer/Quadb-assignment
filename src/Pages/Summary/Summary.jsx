import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieData } from '../../utils/getData'
import parse from 'html-react-parser';


import { BookingForm } from '../../Components';

const Summary = () => {
  const [data, setData] = useState({})
  const [showForm, setShowForm] = useState(false)
  const {id} = useParams()

  useEffect(() => {
    getMovieData(id)
    .then(data => {setData(data)
    console.log(data)})
    .catch((err) => {console.log(err)})
  },[])



  const image = data?.image?.original
  const {name, language, genres, rating, summary} = data

  return (
    <>
    <div style={showForm ? {display: "flex"} : {display : "none"}} className='overlay'></div>
    <main>
      <BookingForm setShowFrom={setShowForm} showForm={showForm} showName={name} />
      <section className='px-8 py-24 flex items-center justify-between gap-10'>
        <div className='w-1/2 border border-2 p-4 rounded-lg'>
          <img src={image} alt={name} />
        </div>
        <div className='w-1/2 flex flex-col'>
          <h1 className='text-[3rem] mb-8'>{name}</h1>
          <div className='mb-8'>
            <span className='font-[300] text-[var(--color-grey)] text-md'>{language}</span> 
            <div>
              {genres?.map((genre, i) =>(
                <span key={i} className='font-[300] text-[var(--color-grey)] text-md mr-2'>{genre}</span>
              ))} 
            </div> 
            <span className='font-[300] text-[var(--color-grey)] text-md'>Rating : {rating?.average} ⭐</span>
            </div>
          <div className='mb-10'>
            {parse(summary || "")}
          </div>
          <button onClick={() => setShowForm(true)} className='w-40 bg-[var(--color-black)] mt-2 py-4 rounded-lg text-sm'>Book Now</button>
        </div>
      </section>
    </main>
    </>
  )
}

export default Summary