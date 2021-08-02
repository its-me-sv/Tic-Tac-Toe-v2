import styled, {keyframes} from "styled-components";

const DrawAnimation = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`;

export const CircleStyles = styled.svg`
    stroke-width: 15px;
    fill: none;
    stroke-linecap: round;

    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;

    stroke: #2ea043;
    background-color: #0d1117;
    border-radius: 10px;
    animation: ${DrawAnimation} 1s linear forwards;
    cursor: pointer;

    &:hover {
        stroke: #38c251;
    }
`;