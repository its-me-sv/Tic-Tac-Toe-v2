import styled from "styled-components";

export const ResetButtonStyles = styled.div`
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
    margin-left: 14rem;
    margin-top: 0.4rem;
    font-family: 'Patrick Hand', cursive;
    background-color: #da3633;
    border-color: #f85149;
    color: white;

    &:hover {
        color: #f85149;
        border-color: #30363d;
        background-color: #21262d;
    }
`;