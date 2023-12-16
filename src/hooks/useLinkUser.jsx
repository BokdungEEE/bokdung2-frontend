export const useLinkUser = () => {
    const setUserIdx = (userIdx) => {
        localStorage.setItem("linkUserIdx", userIdx);
    }

    const getUserIdx = () => {
        return localStorage.getItem("linkUserIdx");
    }

    return {
        setUserIdx,
        getUserIdx
    }
};