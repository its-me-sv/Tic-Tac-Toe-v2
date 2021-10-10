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

function Result2({resetOnline, result, weapon, player2}) {
    const history = useHistory();
    let message;
    if (result === "tie") message = "Game Tied";
    else if (result === weapon) message = "You Won the Game";
    else message = `${player2} Won the Game`;
    return (
        <ResultContainerStyles>
            {message}
            <CloseButtonStyles
                onClick={() => {
                    resetOnline();
                    history.push("/");
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