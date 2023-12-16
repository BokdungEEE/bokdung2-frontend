import { Http } from "./axios";

/**
 * 
 * @param {number} userIdx 
 */
export const isUserExists = async (userIdx) => {
    const response = await Http.get(`/api/users/${userIdx}/exists`);

    const json = JSON.parse(response.data);
    const exists = json.data;
    return exists;
};
/**
 * 
 * @param {number} userIdx 
 */
export const getUserName = async (userIdx) => {
    const response = await Http.get(`/api/users/${userIdx}/name`);

    const json = JSON.parse(response.data);
    const exists = json.data;
    return exists;
};

export const getLinkedUserFromLink = () => {
    const url = location.href;
    const tokens = url.split("/");
    const userIdx = tokens[tokens.length - 1];

    return userIdx;
}

export const getUserCounts = async (accessToken) => {
    const response = await Http.get(`/api/users/counts`, {
        headers: {
            Authorization: accessToken
        }
    });

    const json = JSON.parse(response.data);
    const { received, chance } = json.data;

    return { received, chance };
};