import React from "react";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";

import {
    ResultContainerStyles,
    CloseButtonStyles
} from "./result2.styles";

import {
    resetMultiplayer
} from "../../redux/multiplayer/multiplayer.actions";

import {playSound} from "../../utils";

function Result2({resetOnline, result, weapon, player2}) {
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
    return (
        <ResultContainerStyles>
            {message}
            <CloseButtonStyles
                onClick={() => {
                    resetOnline();
                    history.push("/multiplayer");
                }}
            >Close</CloseButtonStyles>
        </ResultContainerStyles>
    );
}

const mapStateToProps = ({multiplayer}) => ({
    ...multiplayer
});

const mapDispatchToProps = dispatch => ({
    resetOnline: () => dispatch(resetMultiplayer())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Result2);