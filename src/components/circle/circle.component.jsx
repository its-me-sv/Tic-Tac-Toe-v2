import React from 'react';

// Styles
import './circle.styles.css'

const O = ({clickEvent}) => (
    <svg width="100" height="100" viewBox="-50 -50 100 100" className="circle" onClick={clickEvent}>
        <circle cx="0" cy="0" r="40" />
    </svg>
);

export default O;