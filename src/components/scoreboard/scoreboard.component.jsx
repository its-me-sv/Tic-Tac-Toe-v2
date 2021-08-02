import React from 'react';
import {connect} from 'react-redux';

// Styles
import {
    ScoreBoardContainerStyles,
    TextStyles
} from "./scoreboard.styles";

const ScoreBoard = ({player2, scores}) => {
    return (
        <ScoreBoardContainerStyles>
            <TextStyles>Games: {scores[0]}</TextStyles>
            <TextStyles>
                {player2 === "Computer" ? "You" : "Player 1"}: {scores[1]}
            </TextStyles>
            <TextStyles>
                {player2}: {scores[2]}
            </TextStyles>
            <TextStyles>Tie: {scores[3]}</TextStyles>
        </ScoreBoardContainerStyles>
    );
};

const mapStateToProps = ({menu, score}) => ({
    player2: menu.player2,
    scores: score.scoreArray
});

export default connect(mapStateToProps)(ScoreBoard);