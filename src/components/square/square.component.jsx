import React from 'react';

// Styles
import {SquareStyles} from "./square.styles";

const Square = ({clickEvent}) => (
    <SquareStyles onClick={clickEvent}>
    </SquareStyles>
);

export default Square;