import { useEffect } from "react";
import { checkIsLogined, tokenApply } from "../../lib/login";
import { checkIsOpen } from "../../lib/open";
import { useNavigate } from "react-router-dom";
import { useFlow } from "../../hooks/useFlow";
import { useLinkUser } from "../../hooks/useLinkUser";
import { BokdungStroage } from "../../lib/storage";

export function AuthCallbackPage() {
    const { isFlowStateMain, isFlowStateLink } = useFlow();
    const naviagte = useNavigate();
    const { getUserIdx } = useLinkUser();

    useEffect(() => {
        (async () => {
            tokenApply();

            const isOpen = await checkIsOpen();

            console.log("Link State: " + isFlowStateLink());
            console.log("Main State: " + isFlowStateMain());

            if (checkIsLogined()) {
                if (isOpen) {
                    if (isFlowStateLink()) {
                        naviagte("/mainafter");
                    }

                    if (isFlowStateMain()) {
                        naviagte("/mainafter");
                    }
                } else {
                    if (isFlowStateLink()) {
                        const storage = BokdungStroage.loadStroage();
                        if (getUserIdx(storage.userIdx).toString() === storage.userIdx.toString()) {
                            naviagte("/mainprev");
                        } else {
                            naviagte("/cardselect");
                        }
                    }

                    if (isFlowStateMain()) {
                        naviagte("/introduce");
                    }
                }
            } else {
                location.href = "/login"
            }
        })();
    }, []);

    return <></>;
}