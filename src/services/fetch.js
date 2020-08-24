const { baseURL } = require("../shared/baseApi");

class ServiceUsers{
    get(){
        return baseURL.get('users')
        .then(response=>console.log(response))
    }
}

export const serviceUsers=new ServiceUsers()