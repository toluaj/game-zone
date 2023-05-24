import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e6bc8ddc2be5488f8660af9184d6f758'
    }
})

//remember to build backend for this :)