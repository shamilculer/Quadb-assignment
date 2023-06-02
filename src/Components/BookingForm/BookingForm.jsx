import React, { useState } from 'react'
import "./booking-form.css"

const BookingForm = ({setShowFrom, showForm, showName}) => {
    const [date, setDate] = useState("")


    const handleClick= (e) => {
        e.preventDefault()
        setShowFrom(false)
    }
  return (
    <main style={showForm ? {display: "flex"} : {display : "none"}} className='absolute w-full h-full flex items-center justify-center'>
        <div className='booking-form'>
            <div onClick={handleClick} className='close-btn'>X</div>
            <form>
                <div className='flex flex-col mb-10'>
                    <lable for="show-name">Show Name</lable>
                    <input id='show-name' type='text' value={showName}  /> 
                </div>
                <div className='flex flex-col mb-10'>
                    <lable for="date">Date and Time</lable>
                    <input id='date' type='datetime-local' value={date} onChange={(e) => setDate(e.target.value)} /> 
                </div>
                
                <button onClick={handleClick} className='w-40 bg-[var(--color-black)] text-[var(--color-white)] mt-2 py-4 rounded-lg text-sm'>Book Show</button>
            </form>
        </div>
        
    </main>
       
  )
}

export default BookingForm