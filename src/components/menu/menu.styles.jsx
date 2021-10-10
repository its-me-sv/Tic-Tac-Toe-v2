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
`;

export const PlayOnline = styled.div`
    cursor: pointer;
    margin-top: 1rem;
    margin-left: 0.5rem;
    background-color: #238636;
    font-size: 1.8rem;
    padding: 0.4rem;
    align-self: center;
    border-radius: 2rem;
`;