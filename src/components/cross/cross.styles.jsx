import styled, {keyframes} from "styled-components";

const DrawAnimation = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`;

export const CrossStyles = styled.svg`
    stroke-width: 15px;
    fill: none;
    stroke-linecap: round;

    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;

    stroke: #bb2b29;
    background-color: #0d1117;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        stroke: #d6302d;
    }

    line:nth-of-type(1) {
        animation: 1s linear forwards ${DrawAnimation};
    }
    line:nth-of-type(2) {
        animation: 1s linear 0.2s forwards ${DrawAnimation};
    }
`;