import axios from "axios";

const url = "https://api.tvmaze.com/shows";

const getMovies = async ()=>{
    const resp = await axios.get();
    return resp
}