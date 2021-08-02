import React from 'react';
import {connect} from 'react-redux';

// Styles
import './board.styles.css';

// Componets
import ComponentDecider from '../component-decider/component-decider.component';

const Board = ({playingBoard}) => {
    return (
        <div className="board-container">
            {
                playingBoard.map(
                    (val, idx) => 
                        <ComponentDecider
                            key={idx}
                            val={val}
                            pos={idx}
                        />
                )
            }
        </div>
    );
};

const mapStateToProps = ({board}) => ({
    playingBoard: board.board
});

export default connect(
    mapStateToProps
)(Board);