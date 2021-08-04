import styled from "styled-components";

export const MenuContainerStyles = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
`;

export const TitleTextStyles = styled.span`
    font-family: 'Patrick Hand', cursive;
    font-size: 2rem;
    text-align: center;
`;

export const SubMenuStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 6rem;
    cursor: pointer;
`;