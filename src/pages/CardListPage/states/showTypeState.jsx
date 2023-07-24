import { atom, useRecoilState } from "recoil";

const showTypeAtom = atom({
    key: 'typeAtom',
    default: "card"
});

export const useShowTypeState = () => {
    const [showType, setShowAtomType] = useRecoilState(showTypeAtom);

    /**
     * 
     * @param {"card" | "cardgrid"} type 
     */
    const setShowType = (type) => {
        setShowAtomType(type);
    };

    return {
        showType,
        setShowType
    }
};