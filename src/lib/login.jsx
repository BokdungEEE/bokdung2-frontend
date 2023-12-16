import { Http } from "./axios";
import { BokdungStroage } from "./storage";

export const checkIsLogined = () => {
    const storage = BokdungStroage.loadStroage();

    if (storage.accessToken || storage.refreshToken) {
        return true;
    }

    return false;
};

export const getKakaoLoginUrl = async () => {
    const response = await Http.get("/api/users/login/kakao");

    if (response.status !== 200) {
        throw new Error("Failed to get kakao login url");
    }

    const kakaoUrlData = JSON.parse(response.data);
    const kakaoUrl = kakaoUrlData.data;

    return kakaoUrl;
};

export const tokenApply = () => {
    const split = location.href.split("?");

    if (split.length === 1) {
        return;
    }

    const queryParams = split[1]
    const params = queryParams.split("&");

    params.forEach((param) => {
        const [key, value] = param.split("=");

        if (key === "parameter") {
            const decoded = atob(value);
            const parsed = JSON.parse(decoded);

            const { accessToken, refreshToken, uuid } = parsed;

            const storage = new BokdungStroage();

            storage.accessToken = accessToken;
            storage.refreshToken = refreshToken;
            storage.userIdx = uuid;

            storage.saveStorage();
        }
    });
};