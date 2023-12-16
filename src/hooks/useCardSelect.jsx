import { useRecoilState } from "recoil";
import { selectedCardAtom } from "../atoms/selectedCardAtom";

export const useCardSelect = () => {
    const [selected, setSelected] = useRecoilState(selectedCardAtom);

    return { selected, setSelected };
};