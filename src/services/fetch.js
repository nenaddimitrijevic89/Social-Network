const { baseApi } = require("../shared/baseApi");

class ServiceUsers{
    get(){
        return baseApi.get('/users')
        .then(response=>console.log(response))
    }
}

export const serviceUsers=new ServiceUsers()