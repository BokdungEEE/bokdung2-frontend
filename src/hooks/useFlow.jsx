import { useEffect } from "react";

export const useFlow = () => {
    useEffect(() => {
        if (localStorage.getItem("flow") === null) {
            localStorage.setItem("flow", "main");
        }
    }, []);

    const setAsMain = () => {
        localStorage.setItem("flow", "main");
    }

    const setAsLink = () => {
        localStorage.setItem("flow", "link");
    }

    const isFlowStateMain = () => {
        return localStorage.getItem("flow") === "main";
    }

    const isFlowStateLink = () => {
        return localStorage.getItem("flow") === "link";
    }

    return {
        setAsMainFlow: setAsMain,
        setAsLinkFlow: setAsLink,
        isFlowStateMain: isFlowStateMain,
        isFlowStateLink: isFlowStateLink
    }
};