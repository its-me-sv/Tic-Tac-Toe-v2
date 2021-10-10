import React from 'react';
import {connect} from 'react-redux';

// Styles
import {BoardContainerStyles} from './board.styles';

// Componets
import ComponentDecider from '../component-decider/component-decider.component';

const Board = ({playingBoard, playingBoard2, multiplayer, socket}) => {
    let boardToUse = multiplayer === true ? playingBoard2 : playingBoard;
    return (
        <BoardContainerStyles>
            {
                boardToUse.map(
                    (val, idx) => 
                        <ComponentDecider
                            key={idx}
                            val={val}
                            pos={idx}
                            isMultiplayer={multiplayer}
                            socket={socket}
                        />
                )
            }
        </BoardContainerStyles>
    );
};

const mapStateToProps = ({board, multiplayer}) => ({
    playingBoard: board.board,
    playingBoard2: multiplayer.board
});

export default connect(
    mapStateToProps
)(Board);