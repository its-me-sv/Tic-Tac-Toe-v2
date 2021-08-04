import React from 'react';
import {connect} from 'react-redux';

// Styles
import {
    ScoreBoardContainerStyles,
    TextStyles
} from "./scoreboard.styles";

const ScoreBoard = ({player2, scores, p1Name, p2Name}) => {
    return (
        <ScoreBoardContainerStyles>
            <TextStyles>Games: {scores[0]}</TextStyles>
            <TextStyles>
                {
                    player2 === "Computer" 
                    ? "You" 
                    : p1Name.length < 1 || p1Name.trim() === ""
                    ? "Player 1"
                    : p1Name
                }: {scores[1]}
            </TextStyles>
            <TextStyles>
                {
                    player2 === "Computer"
                    ? "Computer"
                    : p2Name.length < 1 || p2Name.trim() === ""
                    ? "Player 2"
                    : p2Name
                }: {scores[2]}
            </TextStyles>
            <TextStyles>Tie: {scores[3]}</TextStyles>
        </ScoreBoardContainerStyles>
    );
};

const mapStateToProps = ({menu, score, players}) => ({
    player2: menu.player2,
    scores: score.scoreArray,
    p1Name: players.player1Name,
    p2Name: players.player2Name
});

export default connect(mapStateToProps)(ScoreBoard);