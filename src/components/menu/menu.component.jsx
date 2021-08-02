import React from 'react';
import { connect } from 'react-redux';

// Styles
import './menu.styles.css';

// Components
import Cross from '../cross/cross.component';
import Circle from '../circle/circle.component';

// Actions
import {
    noOfPlayers,
    setMenuLevel,
    setPlayer1Tool
} from '../../redux/menu/menu.actions';

const Menu = ({
    level, 
    setNoOfPlayers, 
    changeLevel, 
    changePlayerTool,
    player2
}) => {
    return (
        level === 0 
        ?   <div className="menu-container">
                <span className="title-text">Number of Players</span>
                <div className="sub-menu">
                    <span onClick={() => setNoOfPlayers(1)}>1</span>
                    <span onClick={() => setNoOfPlayers(2)}>2</span>
                </div>
            </div>
        :   <div className="menu-container">
                <span className="title-text">
                    {
                        player2 === "Computer"
                        ? "You take"
                        : "Player 1 takes"
                    }
                </span>
                <div className="sub-menu" style={{marginTop: "2rem"}}>
                    <span onClick={() => changePlayerTool("cross")}>
                        <Cross/>
                    </span>
                    <span onClick={() => changePlayerTool("circle")}>
                        <Circle />
                    </span>
                </div>
                <span 
                    className="title-text" 
                    style={{marginTop: "1rem", cursor: "pointer"}}
                    onClick={() => changeLevel(0)}
                >
                    &#8592; Back
                </span>
            </div>
    );
};

const mapStateToProps = ({menu}) => ({
    level: menu.menuLevel,
    player2: menu.player2
});

const mapDispachToProps = dispatch => ({
    setNoOfPlayers: val => dispatch(noOfPlayers(val)),
    changeLevel: val => dispatch(setMenuLevel(val)),
    changePlayerTool: val => dispatch(setPlayer1Tool(val))
});

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Menu);