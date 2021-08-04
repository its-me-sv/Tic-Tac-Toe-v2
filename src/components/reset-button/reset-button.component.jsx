import React from 'react';
import {connect} from 'react-redux';

// Styles
import {ResetButtonStyles} from "./reset-button.styles";

// Actions
import {resetMenu} from "../../redux/menu/menu.actions";
import {resetBoard} from '../../redux/board/board.actions';
import {resetScore} from "../../redux/score/score.actions";
import {resetPlayers} from "../../redux/players/players.actions";

const ResetButton = ({menuReset, boardReset, scoreReset, playersReset}) => (
    <ResetButtonStyles
        onClick={
            () => {
                menuReset();
                boardReset();
                scoreReset();
                playersReset();
            }
        }
    >Reset</ResetButtonStyles>
);

const mapDispatchToProps = dispatch => ({
    menuReset: () => dispatch(resetMenu()),
    boardReset: () => dispatch(resetBoard()),
    scoreReset: () => dispatch(resetScore()),
    playersReset: () => dispatch(resetPlayers())
});

export default connect(
    null,
    mapDispatchToProps
)(ResetButton);