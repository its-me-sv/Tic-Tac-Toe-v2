import React from 'react';
import {connect} from 'react-redux';

// Styles
import './reset-button.styles.css';

// Actions
import {resetMenu} from "../../redux/menu/menu.actions";
import {resetBoard} from '../../redux/board/board.actions';
import {resetScore} from "../../redux/score/score.actions";

const ResetButton = ({menuReset, boardReset, scoreReset}) => (
    <div 
        className="reset-button"
        onClick={
            () => {
                menuReset();
                boardReset();
                scoreReset();
            }
        }
    >Reset</div>
);

const mapDispatchToProps = dispatch => ({
    menuReset: () => dispatch(resetMenu()),
    boardReset: () => dispatch(resetBoard()),
    scoreReset: () => dispatch(resetScore())
});

export default connect(
    null,
    mapDispatchToProps
)(ResetButton);