import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

// Styles
import {
    MenuContainerStyles,
    TitleTextStyles,
    SubMenuStyles,
    PlayOnline
} from "./menu.styles";

// Components
import Cross from '../cross/cross.component';
import Circle from '../circle/circle.component';
import PlayersNames from '../players-name/players-name.component';

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
    player2,
    p1Name,
}) => {
    const history = useHistory();
    return (
        level === 0 
        ?   <MenuContainerStyles>
                <TitleTextStyles>Number of Players</TitleTextStyles>
                <SubMenuStyles>
                    <span style={{cursor: "pointer"}} onClick={() => setNoOfPlayers(1)}>1</span>
                    <span style={{cursor: "pointer"}} onClick={() => setNoOfPlayers(2)}>2</span>
                </SubMenuStyles>
                <PlayOnline
                    onClick={() => history.push("/Tic-Tac-Toe-v2/multiplayer")}
                >Play Online</PlayOnline>
            </MenuContainerStyles>
        :   <MenuContainerStyles>
                {player2 !== "Computer" && <PlayersNames />}
                <TitleTextStyles>
                    {
                        player2 === "Computer"
                        ? "You take"
                        : `${p1Name} takes`
                    }
                </TitleTextStyles>
                <SubMenuStyles style={{marginTop: "2rem"}}>
                    <span onClick={() => changePlayerTool("cross")}>
                        <Cross/>
                    </span>
                    <span onClick={() => changePlayerTool("circle")}>
                        <Circle />
                    </span>
                </SubMenuStyles>
                <TitleTextStyles
                    style={{marginTop: "1rem", cursor: "pointer"}}
                    onClick={() => changeLevel(0)}
                >
                    &#8592; Back
                </TitleTextStyles>
            </MenuContainerStyles>
    );
};

const mapStateToProps = ({menu, players}) => ({
    level: menu.menuLevel,
    player2: menu.player2,
    p1Name: players.player1Name
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