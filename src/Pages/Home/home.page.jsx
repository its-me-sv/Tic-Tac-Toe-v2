import React from 'react';
import {connect} from 'react-redux';

// Styles
import {
    AppContainerStyles,
    CurrentPlayerStyles
} from "./home.styles";

// Components
import Header from '../../components/header/header.component';
import Menu from '../../components/menu/menu.component';
import Board from '../../components/board/board.component';
import ScoreBoard from '../../components/scoreboard/scoreboard.component';
import ResetButton from '../../components/reset-button/reset-button.component';
import Result from '../../components/result/result.component';

class Home extends React.Component {
    nameToPrint = () => {
        const {currPlayer, player2, p1Name, p2Name} = this.props;
        if (currPlayer === "Player 1" && player2 === "Computer")
            return "Your";
        if (currPlayer === "Player 1" && player2 === "Player 2")
            return p1Name.length < 1 || p1Name.trim() === ""
                ? "Player 1"
                : p1Name;
        if (currPlayer === "Player 2" && player2 === "Computer")
            return "Computer";
        return p2Name.length < 1 || p2Name.trim() === ""
            ? "Player 2"
            : p2Name;
    }

    render() {
        const {level, result} = this.props;
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
                            {`${this.nameToPrint()}'s turn`}
                        </CurrentPlayerStyles>
                        <Board multiplayer={false}/>
                        <ResetButton />
                      </span>
                }
            </AppContainerStyles>
        );
    }
}

const mapStateToProps = ({menu, board, score, players}) => ({
    level: menu.menuLevel,
    currPlayer: board.currentPlayer,
    player2: menu.player2,
    player1Tool: menu.player1Tool,
    playingBoard: board.board,
    result: score.result,
    p1Name: players.player1Name,
    p2Name: players.player2Name
});

export default connect(mapStateToProps)(Home);