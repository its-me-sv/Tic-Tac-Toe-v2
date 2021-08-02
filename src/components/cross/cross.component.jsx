import React from 'react';

// Styles
import {CrossStyles} from './cross.styles';

const Cross = ({clickEvent}) => (
    <CrossStyles
        width="100" height="100" 
        viewBox="-50 -50 100 100" 
        onClick={clickEvent}
    >
        <line x1="-40" y1="-40" x2="40" y2="40" />
        <line x1="-40" y1="40" x2="40" y2="-40" />
    </CrossStyles>
);

export default Cross;