import React from 'react';
import {connect} from 'react-redux';

// Styles
import './app.styles.css';

// Components
import Header from '../../components/header/header.component';
import Menu from '../../components/menu/menu.component';
import Board from '../../components/board/board.component';
import ScoreBoard from '../../components/scoreboard/scoreboard.component';
import ResetButton from '../../components/reset-button/reset-button.component';
import Result from '../../components/result/result.container';

// Functions
import {detectWinner} from "../../utils";

class App extends React.Component {
    render() {
        const {level, currPlayer, player2} = this.props;
        const { playingBoard, player1Tool } = this.props;
        let result = null;
        if (player1Tool !== null) {
            const player2Tool = player1Tool === "circle" ? "cross" : "circle";
            result = detectWinner([...playingBoard], player1Tool, player2Tool);
            switch (result) {
                case player1Tool:
                    result = player2 === "Computer" ? "You" : "Player 1";
                    break;
                case player2Tool:
                    result = player2;
                    break;
                case "tie":
                    result = "tie";
                    break;
                default:
                    break;
            }
        }
        return (
            <div className="app-container">
                {result !== null && <Result winner={result}/>}
                <Header />
                {
                    level < 2
                    ? <Menu />
                    : <span>
                        <ScoreBoard />
                        <span className="current-player">
                            {
                                currPlayer === "Player 1" && player2 === "Computer"
                                ? "Your turn"
                                : `${currPlayer}'s turn`
                            }
                        </span>
                        <Board />
                        <ResetButton />
                      </span>
                }
            </div>
        );
    }
}

const mapStateToProps = ({menu, board}) => ({
    level: menu.menuLevel,
    currPlayer: board.currentPlayer,
    player2: menu.player2,
    player1Tool: menu.player1Tool,
    playingBoard: board.board
});

export default connect(mapStateToProps)(App);