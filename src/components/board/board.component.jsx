import React from 'react';
import {connect} from 'react-redux';

// Styles
import {BoardContainerStyles} from './board.styles';

// Componets
import ComponentDecider from '../component-decider/component-decider.component';

const Board = ({playingBoard}) => {
    return (
        <BoardContainerStyles>
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
        </BoardContainerStyles>
    );
};

const mapStateToProps = ({board}) => ({
    playingBoard: board.board
});

export default connect(
    mapStateToProps
)(Board);