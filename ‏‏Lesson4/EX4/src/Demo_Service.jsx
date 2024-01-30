import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/users";




const getUser = async ()=>{
    const resp = await axios.get(url);
    return resp;
}

export{getUser};