import styled from "styled-components";

export const PlayersContainerStyles = styled.div`
    display: grid;
    margin-bottom: 2rem;
`;

export const TitleFieldStyles = styled.span`
    font-family: 'Patrick Hand';
    text-align: center;
    font-size: 1.8rem;
`;

export const LabelFieldStyles = styled.span`
    margin-top: 0.5rem;
    font-family: 'Patrick Hand';
    font-size: 1.4rem;
    text-align: center;
`;

export const InputFieldStyles = styled.input`
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
`;