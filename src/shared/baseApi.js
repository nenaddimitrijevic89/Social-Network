import Axios from 'axios';

const baseApi=Axios.create({
    baseURL:'https://backend-social-network.herokuapp.com/'
})

export { baseApi }