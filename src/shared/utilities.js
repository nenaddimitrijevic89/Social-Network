const { storageService } = require("../services/storageService")

const getAuthHeader = () => {
    const token = storageService.get('token')
    if (token) {
        return `Bearer ${token}`
    }
    return 'Bearer sn-token'
}

export { getAuthHeader }