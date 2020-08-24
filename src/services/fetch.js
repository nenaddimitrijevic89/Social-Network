const { baseURL } = require("../shared/baseURL");

class ServiceUsers{
    get(){
        return baseURL.get('users')
        .then(response=>console.log(response))
    }
}

export const serviceUsers=new ServiceUsers()