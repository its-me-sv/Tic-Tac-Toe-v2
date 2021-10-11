import styled from "styled-components";

export const ResultContainerStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 4em;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    text-align: center;
`;

export const CloseButtonStyles = styled.button`
    appearance: none;
    border: 1px solid;
    border-radius: 6px;
    cursor: pointer;
    display: inline-block;
    font-size: 2rem;
    font-weight: 500;
    line-height: 20px;
    padding: 5px 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    margin-top: 0.4rem;
    font-family: 'Patrick Hand', cursive;
    background-color: #dfd32c;
    border-color: #dceb0c;
    color: white;

    &:hover {
        color: #dceb0c;
        border-color: #30363d;
        background-color: #21262d;
    }
`;