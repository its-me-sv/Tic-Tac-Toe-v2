import React from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

import {
    ResultContainerStyles,
    CloseButtonStyles
} from "./result2.styles";

import {
    newGame
} from "../../redux/multiplayer/multiplayer.actions";

import {playSound} from "../../utils";

function Result2({newGame, result, weapon, player2, left}) {
    const history = useHistory();
    let message;
    if (result === "tie") {
        message = "Game Tied";
        playSound("tie");
    }
    else if (result === weapon) {
        message = "You Won the Game";
        playSound("win");
    }
    else {
        message = `${player2} Won the Game`;
        playSound("lost");
    }
    if (left === true) message = `${player2} left the Game`;
    return (
        <ResultContainerStyles>
            {message}
            <CloseButtonStyles
                onClick={() => {
                    if (left === true) history.push("/");
                    else newGame();
                }}
            >Close</CloseButtonStyles>
        </ResultContainerStyles>
    );
}

const mapStateToProps = ({multiplayer}) => ({
    ...multiplayer
});

const mapDispatchToProps = dispatch => ({
    newGame: () => dispatch(newGame())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Result2);