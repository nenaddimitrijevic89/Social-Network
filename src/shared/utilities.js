const { storageService } = require("../services/storageService")

const getAuthHeader = () => {
    const token = storageService.get('token')
    if (token) {
        return `Bearer ${token}`
    }
    return 'Bearer sn-token'
}

const isLoggedIn = () => {
    const token = storageService.get('token');
    if (token) {
        return true;
    }
    return false;
}

const embed =(post)=>{
    const base = 'https://www.youtube.com/embed/';
    const id=post.slice(32)
    return `${base}${id}`;
}

const convertDate = (date) => {

    const dateOfBirth = new Date(date);
    const y = dateOfBirth.getFullYear();
    const m = dateOfBirth.getMonth() + 1;
    const d = dateOfBirth.getDate();

    return (
        `${d}-${m}-${y}`
    )
}

export { getAuthHeader, isLoggedIn, embed, convertDate }