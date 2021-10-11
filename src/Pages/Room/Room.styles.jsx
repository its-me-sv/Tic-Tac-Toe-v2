import styled from "styled-components";

export const RoomContainerStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const RoomTitleStyles = styled.span`
    font-size: 3rem;
    margin-top: 0.4rem;
    color: rgb(28, 144, 221);
    font-family: 'Patrick Hand';
    @media only screen and (max-width: 768px) {
        margin-top: 0rem;
    }
`;

export const PlayerStyles = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 0.2rem;
        gap: 0.5rem;
    }
`;

export const LabelStyles = styled.span`
    font-size: 1.4rem;
    font-family: 'Patrick Hand';
`;

export const PlayerNameStyles = styled.input`
    margin-top: 0.5rem;
    padding: 0.4rem;
    background-color: #161b22;
    border-radius: 1rem;
    font-size: 1.2rem;
    color: white;
    border: 0.2rem solid rgba(55, 106, 176, 0.5);
    outline: none;
    width: auto;
    font-family: 'Patrick Hand';
    &:focus {
        border: 0.2rem solid rgb(28, 144, 221);
        border-radius: 1rem;
    }
    @media only screen and (max-width: 768px) {
        margin-top: 0.2rem;
    }
`;

export const UpdateButtonStyles = styled.div`
    padding: 0rem 0.7rem 0.2rem 0.7rem;
    font-size: 1.4rem;
    border-radius: 1rem;
    background-color: rgb(235, 235, 57);
    color: black;
    cursor: pointer;
    ${({disabled}) => disabled === true && `cursor: default; opacity: 0;`}
`;

export const BoardContainerStyles = styled.div`
    margin-top: 1rem;
    @media only screen and (max-width: 768px) {
        margin-top: 0.2rem;
    }
`;

export const CurrentPlayerStyles = styled.span`
    font-family: 'Patrick Hand', cursive;
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 0rem;
    @media only screen and (max-width: 768px) {
        margin-top: 0rem;
    }
`;