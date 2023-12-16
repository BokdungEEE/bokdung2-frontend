import { Http } from "./axios"

export const sendPost = async (uuid, card, message, accessToken) => {
    await Http.post(`/api/posts/save/${uuid}`, JSON.stringify({
        cardIdx: card,
        message: message
    }), {
        headers: {
            Authorization: accessToken,
            "Content-Type": "application/json"
        }
    });
}