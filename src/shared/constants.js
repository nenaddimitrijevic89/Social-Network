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