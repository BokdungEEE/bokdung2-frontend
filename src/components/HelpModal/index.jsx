import styled from "styled-components";
import { useHelpModal } from "../../atoms/helpAtom";
import { useEffect } from "react";
import { ReactComponent as ModalBack } from "./assets/ModalBack.svg";

const Background = styled.div`
    width: 100vw;
    height: 100vh;

    left: 0px;
    top: 0px;

    position: fixed;

    z-index: -100;
    
    background: rgba(145, 144, 163, 0.21);
    backdrop-filter: blur(8px);

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    position: absolute;
    color: var(--white, #DCE9F5);
    text-align: center;

    /* PyeongChang/body 3 */
    font-family: PyeongChang;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const DividingLine = styled.div`
    width: 220px;
    height: 1px;
    background-color: var(--gray1, #53565E);
    margin-top: 20px;
    margin-bottom: 20px;
`;

const ConfirmButton = styled.div`
    width: 120px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 40px;
    background: var(--white, #DCE9F5);

    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--black, #32363A);

    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    /* PyeongChang/body 1 */
    font-family: PyeongChang;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    margin-top: 20px;
`;

export default function HelpModal() {
    useEffect(() => {
        console.log(helpState);
    });
    const {
        helpState,
        closeHelpModal
    } = useHelpModal();

    const handleCloseModal = () => {
        closeHelpModal(false);
    }

    return (
        helpState && (
            <Background>
                <Wrapper>
                    <ModalBack />
                </Wrapper>
                <Wrapper>
                    친구에게 운세카드를 보낼 수 있는<br />
                    기본 10회가 제공됩니다.<br />
                    <br />
                    친구들에게 운세카드를 보낼 때마다<br />
                    횟수가 줄어들며, 이후에는<br />
                    친구들에게 운세카드를 받은 만큼<br />
                    횟수가 충전됩니다.
                    <DividingLine>
                        <span></span>
                    </DividingLine>

                    기본으로 주어지는 10회를<br />
                    소진했다면 친구에게 운세카드를<br />
                    보내달라고 부탁해보세요!
                    <ConfirmButton onClick={handleCloseModal}>
                        확인
                    </ConfirmButton>
                </Wrapper>
            </Background>
        )
    )
}