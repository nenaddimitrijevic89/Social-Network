import { getAuthHeader } from './utilities';

export const HEADERS = () => {
        return {
                "Content-type": "application/json; charset=UTF-8",
                "x-api-key": "1vaHd3v",
                Authorization: getAuthHeader()
        }
};

export const handlePostTypeDisplay = (post) => {
        if (post.type === "image") {
          const buffer = post.src?.data;
          
          const b64 = Buffer.from(buffer).toString("base64");
          post.src = buffer ? "data:image/png;base64," + b64 : null;
        } else {
          const stringSrc = Buffer.from(post.src.data).toString();
          post.src = stringSrc;
        }
}

export const handleImageDisplay = (user) => {
                const buffer = user.avatarUrl?.data || "";
                const b64 = Buffer.from(buffer).toString("base64");
                user.avatarUrl = buffer ? "data:image/png;base64," + b64 : null;
}

export  const customStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(218, 218, 218, 0.5)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };