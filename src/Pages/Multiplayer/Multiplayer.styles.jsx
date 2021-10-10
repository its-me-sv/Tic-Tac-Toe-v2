import styled, {css} from "styled-components";

const commonButtonStyles = css`
    border: none;
    padding: 0rem 0.7rem 0.2rem 0.7rem;
    font-size: 1.4rem;
    border-radius: 1rem;
    background-color: rgb(235, 235, 57);
    color: black;
    cursor: pointer;
`;

export const MultiplayerContainerStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MenuFormStyles = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    border: 0.3rem solid #1c90dd;
    border-radius: 3rem;
    padding: 1rem;
    padding-top: 0rem;
    padding-bottom: 0rem;
`;

export const RoomTitleStyles = styled.span`
    font-size: 2rem;
    margin: 0rem;
`;

export const RoomStyles = styled.input`
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
    &::focus {
        border: 0.2rem solid rgb(28, 144, 221);
        border-radius: 1rem;
    }
`;

export const JoinStyles = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export const JoinButtonStyles = styled.button`
    ${commonButtonStyles}
`;

export const CreateButtonStyles = styled.button`
    ${commonButtonStyles}
    background-color: rgb(63, 235, 57);
`;