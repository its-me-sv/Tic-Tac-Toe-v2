import React from 'react';
import {useHistory} from "react-router-dom";

// Stlyes
import {HeaderTextStyles} from './header.styles';

const Header = () => {
    const history = useHistory();
    return (
        <HeaderTextStyles onClick={() => history.push("/")}>
            Tic Tac Toe
        </HeaderTextStyles>
    );
};

export default Header;