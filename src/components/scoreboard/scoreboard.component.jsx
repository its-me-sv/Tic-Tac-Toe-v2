import React from 'react';
import {connect} from 'react-redux';

// Styles
import './scoreboard.styles.css';

const ScoreBoard = ({player2, scores}) => {
    return (
        <div className="scoreboard-container">
            <span className="text">Games: {scores[0]}</span>
            <span className="text">
                {player2 === "Computer" ? "You" : "Player 1"}: {scores[1]}
            </span>
            <span className="text">
                {player2}: {scores[2]}
            </span>
            <span className="text">Tie: {scores[3]}</span>
        </div>
    );
};

const mapStateToProps = ({menu, score}) => ({
    player2: menu.player2,
    scores: score.scoreArray
});

export default connect(mapStateToProps)(ScoreBoard);