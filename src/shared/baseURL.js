import Axios from 'axios';

const baseURL=Axios.create({
    baseURL:'https://backend-social-network.herokuapp.com/'
})

export { baseURL }