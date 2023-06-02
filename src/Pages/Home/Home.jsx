import React, { useEffect, useState } from 'react'
import { getAllData } from '../../utils/getData'

import { MovieCards } from '../../Components'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getAllData()
    .then(data => {setData(data)})
    .catch(err => {console.log(err)})
  },[])

  return (
    <main >
      <MovieCards data={data} />
    </main>
  )
}

export default Home