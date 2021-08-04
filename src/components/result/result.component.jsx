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

const Result = ({winner, boardReset, scoreUpdater, resultReset, p1Name, p2Name}) => {
    const messageToPrint = () => {
        if (winner === "tie")
            return "Game tied";
        let dood = winner;
        if (winner === "Player 1")
            dood = p1Name.length < 1 || p1Name.trim() === "" ? "Player 1" : p1Name;
        else if (winner === "Player 2")
            dood = p2Name.length < 1 || p2Name.trim() === "" ? "Player 2" : p2Name;
        return `${dood} won the game`
    };

    scoreUpdater(getIndex[winner] + 1);
    return (
        <ResultContainerStyles>
            {messageToPrint()}
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

const mapStateToProps = ({players}) => ({
    p1Name: players.player1Name,
    p2Name: players.player2Name
});

const mapDispatchToProps = dispatch => ({
    boardReset: () => dispatch(resetBoard()),
    scoreUpdater: idx => dispatch(updateScore(idx)),
    resultReset: () => dispatch(updateResult(null))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Result);