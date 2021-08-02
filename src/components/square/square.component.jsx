import React from 'react';

// Styles
import './square.styles.css';

const Square = ({clickEvent}) => (
    <div className="square" onClick={clickEvent}>
    </div>
);

export default Square;