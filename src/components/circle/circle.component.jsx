import React from 'react';

// Styles
import {CircleStyles} from './circle.styles';

const Circle = ({clickEvent}) => (
    <CircleStyles 
        width="100" height="100" 
        viewBox="-50 -50 100 100" 
        onClick={clickEvent}
    >
        <circle cx="0" cy="0" r="40" />
    </CircleStyles>
);

export default Circle;