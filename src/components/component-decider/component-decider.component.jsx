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
import {
    updateBoard as updBord,
    setChance,
    setResult as sr
} from "../../redux/multiplayer/multiplayer.actions";

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
        return calculatedResult;
    }

    handleClick = async () => {
        const {isMultiplayer} = this.props;
        if (isMultiplayer===false) {
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
            return;
        }
        const {
            board,
            pos,
            weapon,
            updBord,
            isChance,
            setChance,
            roomId
        } = this.props;
        if (!isChance) return;
        if (board[pos] !== 0) return;
        let boardCopy = [...board];
        updBord(pos, weapon);
        setChance();
        this.props.socket.emit("updateBoard", {
            pos,
            weapon,
            roomId
        });
        boardCopy[pos] = weapon;
        let result = detectWinner(
            [...boardCopy], 
            weapon, 
            weapon === "circle" ? "cross" : "circle"
        );
        if (result === null) return;
        this.props.socket.emit("gameResult", {result, roomId});
        this.props.sr(result);
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

const mapStateToProps = ({board, menu, multiplayer}) => ({
    currPlayer: board.currentPlayer,
    playingBoard: board.board,
    player1Tool: menu.player1Tool,
    player2: menu.player2,
    board: multiplayer.board,
    weapon: multiplayer.weapon,
    isChance: multiplayer.isChance,
    roomId: multiplayer.roomId
});

const mapDispatchToProps = dispatch => ({
    updateBoard: (pos, val) => dispatch(updateBoard(pos, val)),
    updatePlayer: val => dispatch(updatePlayer(val)),
    setResult: val => dispatch(updateResult(val)),
    updBord: (pos, val) => dispatch(updBord(pos, val)),
    setChance: () => dispatch(setChance()),
    sr: res => dispatch(sr(res))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentDecider);