import Axios from 'axios';

export const HEADERS = (token) => {
    return {"Content-type": "application/json; charset=UTF-8",
    "x-api-key": "1vaHd3v",
    Authorization: `Bearer ${token}`
    }
};

const baseApi=Axios.create({
    baseURL:'https://backend-social-network.herokuapp.com'
})

export { baseApi }