import React from 'react';
import {connect} from 'react-redux';

// Styles
import './scoreboard.styles.css';

const ScoreBoard = ({player2, scores}) => {
    return (
        <div className="scoreboard-container">
            <span className="text">Games: {Math.floor(scores[0]/2)}</span>
            <span className="text">
                {player2 === "Computer" ? "You" : "Player 1"}: {Math.floor(scores[1]/2)}
            </span>
            <span className="text">
                {player2}: {Math.floor(scores[2]/2)}
            </span>
            <span className="text">Tie: {Math.floor(scores[3]/2)}</span>
        </div>
    );
};

const mapStateToProps = ({menu, score}) => ({
    player2: menu.player2,
    scores: score.scoreArray
});

export default connect(mapStateToProps)(ScoreBoard);