import { Http } from "./axios"

export const checkIsOpen = async () => {
    const response = await Http.get("/api/open");

    return response.data.data;
}