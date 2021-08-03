import React from 'react';
import {connect} from 'react-redux';

// Styles
import {
    AppContainerStyles,
    CurrentPlayerStyles
} from "./app.styles";

// Components
import Header from '../../components/header/header.component';
import Menu from '../../components/menu/menu.component';
import Board from '../../components/board/board.component';
import ScoreBoard from '../../components/scoreboard/scoreboard.component';
import ResetButton from '../../components/reset-button/reset-button.component';
import Result from '../../components/result/result.component';

// Functions

class App extends React.Component {
    render() {
        const {level, currPlayer, player2, result} = this.props;
        return (
            <AppContainerStyles>
                {result !== null && <Result winner={result}/>}
                <Header />
                {
                    level < 2
                    ? <Menu />
                    : <span>
                        <ScoreBoard />
                        <CurrentPlayerStyles>
                            {
                                currPlayer === "Player 1" && player2 === "Computer"
                                ? "Your turn"
                                : `${currPlayer}'s turn`
                            }
                        </CurrentPlayerStyles>
                        <Board />
                        <ResetButton />
                      </span>
                }
            </AppContainerStyles>
        );
    }
}

const mapStateToProps = ({menu, board, score}) => ({
    level: menu.menuLevel,
    currPlayer: board.currentPlayer,
    player2: menu.player2,
    player1Tool: menu.player1Tool,
    playingBoard: board.board,
    result: score.result
});

export default connect(mapStateToProps)(App);