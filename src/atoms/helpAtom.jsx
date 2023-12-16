import { atom, useRecoilState } from "recoil";

const helpAtom = atom({
    key: "helpAtom",
    default: false,
});

export const useHelpModal = () => {
    const [helpState, setHelpState] = useRecoilState(helpAtom);

    const openHelpModal = () => {
        setHelpState(true);
    };

    const closeHelpModal = () => {
        setHelpState(false);
    }

    return {
        helpState,
        openHelpModal,
        closeHelpModal,
    }
};