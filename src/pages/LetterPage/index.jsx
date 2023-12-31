import { styled } from "styled-components";
import Header from "../CardListPage/components/Header";
import { ReactComponent as FlipIcon } from "../CardListPage/assets/flip.svg";

import LargeButton from "../CardListPage/components/LargeButton";
import { useEffect, useState } from "react";
import LargeCard from "../CardListPage/components/LargeCard";
import { useNavigate } from "react-router";
import { useCardSelect } from "../../hooks/useCardSelect";
import { getUserName } from "../../lib/user";
import { useLinkUser } from "../../hooks/useLinkUser";
import { sendPost } from "../../lib/post";
import { BokdungStroage } from "../../lib/storage";

const Background = styled.div`
    position: fixed;

    width: 100vw;
    height: 100vh;
    
    top: 0px;
    left: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #32363A;

    z-index: -1;
`;


const BackgroundCircle = styled.div`
    width: 630px;
    height: 630px;
    
    border-radius: 630px;
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(220, 233, 245, 0.20) 0%, rgba(220, 233, 245, 0.00) 100%);
`;

const DescriptionWrapper = styled.div`
    margin-top: 120px;
    font-size: 15px;
    font-weight: 400;
    font-family: "PyeongChang";

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: #DCE9F5;
`;

const MiddleCardsWrapper = styled.div`
    margin-top: 60px;
    column-gap: 16px;
    
    padding-left: calc(50vw - 110px);
    padding-right: calc(50vw - 110px);

    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory; /* y 축 방향으로만 scroll snap 적용 */

    // remove scorllbar
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const ButtonWrapper = styled.div`
    width: 100vw;

    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 32px;
`;

const FlipIconWrapper = styled.div`
    margin-top: 20px;

    width: 100vw;
    display: flex;
    justify-content: center;
`;

const WriterWrapper = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    width: auto;

    font-size: 14px;
    font-weight: 300;
    font-family: "PyeongChangPeace";

    color: #DCE9F5;
`;

const WriterLetterLimit = styled.div`
    font-size: 12px;
    color: #7A7F8D;
`;

const ContentWrapper = styled.div`
    margin-top: 12px;
    flex: 1;
    
    display: flex;
    flex-direction: column;

    justify-content: space-between;
`;

const RightAlign = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: flex-end;
`;

const ContentInput = styled.textarea`
    font-family: "PyeongChangPeace";
    font-size: 14px;
    flex: 1;

    color: #DCE9F5;

    &::placeholder {
        color: #7A7F8D;
    }

    border: none;
    background: none;
    outline: none;
    resize: none;
`;

export default function LetterPage() {
    const navigate = useNavigate();

    const { selected } = useCardSelect();

    const [flipped, setFlipped] = useState(false);
    const [textContent, setTextContent] = useState("");
    const [userName, setUserName] = useState("");
    const { getUserIdx } = useLinkUser();

    const onClickFlip = () => {
        setFlipped(prevState => !prevState);
    }

    useEffect(() => {
        (async () => {
            const userIdx = getUserIdx();
            const fetchedUserName = await getUserName(userIdx);

            setUserName(fetchedUserName);
        })();
    }, []);

    const onClickSend = async () => {
        const userIdx = getUserIdx();
        const storage = BokdungStroage.loadStroage();
        await sendPost(userIdx, 1, textContent, storage.accessToken);

        navigate("/sent");
    }

    return <>

        <Background>
            <BackgroundCircle />
        </Background>

        <Header backactivate={true} backurl="/cardselect" />

        <DescriptionWrapper>
            친구에게 보낼 메시지를 입력해주세요
        </DescriptionWrapper>

        <MiddleCardsWrapper>
            <LargeCard type={selected} flippable={false} flip={flipped}>
                <WriterWrapper>
                    <div>보내는 사람 : {userName}</div>
                    <WriterLetterLimit>3/20</WriterLetterLimit>
                </WriterWrapper>
                <ContentWrapper>
                    <ContentInput placeholder="메시지를 입력해주세요" onChange={
                        (e) => {
                            setTextContent(e.target.value);
                        }
                    } value={textContent} maxLength={200} />
                    <RightAlign>{textContent.length}/200</RightAlign>
                </ContentWrapper>
            </LargeCard>
        </MiddleCardsWrapper>

        <FlipIconWrapper>
            <FlipIcon onClick={() => onClickFlip()} />
        </FlipIconWrapper>

        <ButtonWrapper>
            <LargeButton activated={textContent.length > 0} text="전송하기" onClick={onClickSend} />
        </ButtonWrapper>
    </>
}