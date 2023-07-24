import PropTypes from 'prop-types';

import { ReactComponent as CourseCard } from "../assets/smallcards/course.svg";
import { ReactComponent as HealthCard } from "../assets/smallcards/health.svg";
import { ReactComponent as LoveCard } from "../assets/smallcards/love.svg";
import { ReactComponent as MoneyCard } from "../assets/smallcards/money.svg";
import { ReactComponent as PromotionCard } from "../assets/smallcards/promotion.svg";
import { ReactComponent as TestCard } from "../assets/smallcards/test.svg";
import { ReactComponent as LuckyCard } from "../assets/smallcards/lucky.svg";

/**
 * 
 * @param {{type: "course"|"health"|"love"|"money"|"promotion"|"test", onClick:()=>void}} args0 
 * @returns 
 */
export default function SmallCard({ type, children, onClick }) {
    if (type == "course") {
        return <CourseCard onClick={() => onClick()}>
            {children}
        </CourseCard>
    } else if (type == "health") {
        return <HealthCard onClick={() => onClick()}>
            {children}
        </HealthCard>
    } else if (type == "love") {
        return <LoveCard onClick={() => onClick()}>
            {children}
        </LoveCard>
    } else if (type == "money") {
        return <MoneyCard onClick={() => onClick()}>
            {children}
        </MoneyCard>
    } else if (type == "promotion") {
        return <PromotionCard onClick={() => onClick()}>
            {children}
        </PromotionCard>
    } else if (type == "test") {
        return <TestCard onClick={() => onClick()}>
            {children}
        </TestCard>
    } else if (type == "lucky") {
        return <LuckyCard onClick={() => onClick()}>
            {children}
        </LuckyCard>
    }
}

SmallCard.propTypes = {
    type: PropTypes.oneOf(["course", "health", "love", "money", "promotion", "test", "lucky"]).isRequired,
    name: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
};