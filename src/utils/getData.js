import axios from "axios"

export const getAllData = async () => {
    try{
        const data = await axios.get("https://api.tvmaze.com/search/shows?q=all")
        return data.data
    }
    catch(err){
        console.log(err)
    }
}

export const getMovieData = async (id) => {
    try{
        const data = await axios.get(`https://api.tvmaze.com/shows/${id}`)
        return data.data
    }
    catch(err){
        console.log(err)
    }
}

