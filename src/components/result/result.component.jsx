import React from "react";
import {connect} from "react-redux";

// Styles
import {
    ResultContainerStyles,
    CloseButtonStyles
} from "./result.styles";

// Action
import {resetBoard} from "../../redux/board/board.actions";
import {updateScore, updateResult} from "../../redux/score/score.actions";

const getIndex = {
    "Player 1": 0,
    "You": 0,
    "Computer": 1,
    "Player 2": 1,
    "tie": 2
};

const Result = ({winner, boardReset, scoreUpdater, resultReset}) => {
    let message = `${winner} won the game`;
    if (winner === "tie")
        message = "Game tied";
    scoreUpdater(getIndex[winner] + 1);
    return (
        <ResultContainerStyles>
            {message}
            <CloseButtonStyles 
                onClick={
                    () => {
                        boardReset();
                        resultReset();
                    }
                }
            >Close</CloseButtonStyles>
        </ResultContainerStyles>
    );
};

const mapDispatchToProps = dispatch => ({
    boardReset: () => dispatch(resetBoard()),
    scoreUpdater: idx => dispatch(updateScore(idx)),
    resultReset: () => dispatch(updateResult(null))
});

export default connect(
    null,
    mapDispatchToProps
)(Result);