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
import {updateResult} from "../../redux/score/score.actions";

// Functions
import {
    calculateResponse,
    sleep,
    detectWinner
} from "../../utils";

class ComponentDecider extends React.Component {
    winnerChecker = (player1Tool, boardCopy, player2) => {
        const {setResult} = this.props;
        let calculatedResult = null;
        
        const player2Tool = player1Tool === "circle" ? "cross" : "circle";
        calculatedResult = detectWinner([...boardCopy], player1Tool, player2Tool);
        switch (calculatedResult) {
            case player1Tool:
                calculatedResult = player2 === "Computer" ? "You" : "Player 1";
                break;
            case player2Tool: 
                calculatedResult = player2;
                break;
            case "tie": 
                calculatedResult = "tie";
                break;
            default:
                break;
        }
        setResult(calculatedResult);
        console.log(calculatedResult);
        return calculatedResult;
    }

    handleClick = async () => {
        const {
            pos,
            updateBoard,
            updatePlayer,
            playingBoard,
            currPlayer,
            player1Tool,
            player2,
            setResult
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
        let boardCopy =[...playingBoard];
        boardCopy[pos] = tool;
        let temp = this.winnerChecker(player1Tool, [...boardCopy], player2);
        if (temp !== null) return;
        if (nextPlayer === "Computer") {
            let computerTool = player1Tool === "circle" ? "cross" : "circle";
            let response = calculateResponse(
                boardCopy, 
                computerTool,
                player1Tool
            );
            if (response === -1) {
                setResult("tie");
                return;
            }
            await sleep(200);
            boardCopy[response] = computerTool;
            updateBoard(response, computerTool);
            updatePlayer("Player 1");
            temp = this.winnerChecker(player1Tool, [...boardCopy], player2);
            if (temp !== null) return;
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
    updatePlayer: val => dispatch(updatePlayer(val)),
    setResult: val => dispatch(updateResult(val))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentDecider);