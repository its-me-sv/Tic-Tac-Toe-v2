import styled from "styled-components";

export const BoardContainerStyles = styled.div`
    display: grid;
    max-width: 100vw;
    max-height: 100vh;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding: 7px;
    border-radius: 14px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    background-color: rgb(28, 120, 182);

    &:hover {
        background-color: rgb(60, 161, 228);
    }
`;