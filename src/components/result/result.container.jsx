import React from "react";
import {connect} from "react-redux";

// Styles
import "./result.styles.css";

// Action
import {resetBoard} from "../../redux/board/board.actions";
import {updateScore} from "../../redux/score/score.actions";

const getIndex = {
    "Player 1": 0,
    "You": 0,
    "Computer": 1,
    "Player 2": 1,
    "tie": 2
};

const Result = ({winner, boardReset, scoreUpdater}) => {
    let message = `${winner} won the game`;
    if (winner === "tie")
        message = "Game tied";
    scoreUpdater(getIndex[winner] + 1);
    return (
        <div className="result-container">
            {message}
            <button onClick={boardReset} className="close-btn">Close</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    boardReset: () => dispatch(resetBoard()),
    scoreUpdater: idx => dispatch(updateScore(idx))
});

export default connect(
    null,
    mapDispatchToProps
)(Result);