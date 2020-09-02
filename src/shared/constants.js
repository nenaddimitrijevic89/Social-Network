import { storageService } from "../services/storageService";

const getAuthHeader = () => {
        const token = storageService.get('token')
        if (token) {
                return `Bearer ${token}`
        }
        return 'Bearer sn-token'
}
export const HEADERS = () => {
        return {
                "Content-type": "application/json; charset=UTF-8",
                "x-api-key": "1vaHd3v",
                Authorization: getAuthHeader()
        }
};

