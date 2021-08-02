import React from "react";
import {connect} from "react-redux";

// Styles
// import "./component-decider.styles.css";

// Components
import Square from "../square/square.component";
import Circle from "../circle/circle.component";
import Cross from "../cross/cross.component";

// Actions
import {
    updateBoard,
    updatePlayer
} from "../../redux/board/board.actions";

// Functions
import {
    calculateResponse,
    sleep
} from "../../utils";

class ComponentDecider extends React.Component {
    handleClick = async () => {
        const {
            pos,
            updateBoard,
            updatePlayer,
            playingBoard,
            currPlayer,
            player1Tool,
            player2
        } = this.props;
        if (playingBoard[pos] !== 0)
            return;
        let tool;
        if (currPlayer === "Player 1")
            tool = player1Tool;
        else
            tool = player1Tool === "circle" ? "cross" : "circle";
        updateBoard(pos, tool);
        let nextPlayer = currPlayer === "Player 1" ? player2 : "Player 1";
        updatePlayer(nextPlayer);
        if (nextPlayer === "Computer") {
            let boardCopy =[...playingBoard];
            boardCopy[pos] = tool;
            let computerTool = player1Tool === "circle" ? "cross" : "circle";
            let response = calculateResponse(
                boardCopy, 
                computerTool,
                player1Tool
            );
            if (response === -1)
                return;
            await sleep(500);
            updateBoard(response, computerTool);
            updatePlayer("Player 1");
        }
    }

    render() {
        const {val} = this.props;
        switch (val) {
            case "circle":
                return <Circle clickEvent={this.handleClick}/>
            case "cross":
                return <Cross clickEvent={this.handleClick}/>
            default:
                return <Square clickEvent={this.handleClick}/>
        }
    }
};

const mapStateToProps = ({board, menu}) => ({
    currPlayer: board.currentPlayer,
    playingBoard: board.board,
    player1Tool: menu.player1Tool,
    player2: menu.player2
});

const mapDispatchToProps = dispatch => ({
    updateBoard: (pos, val) => dispatch(updateBoard(pos, val)),
    updatePlayer: val => dispatch(updatePlayer(val))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentDecider);