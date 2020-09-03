import {getAuthHeader} from './utilities';

export const HEADERS = () => {
        return {
                "Content-type": "application/json; charset=UTF-8",
                "x-api-key": "1vaHd3v",
                Authorization: getAuthHeader()
        }
};