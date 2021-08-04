import React from "react";
import {connect} from "react-redux";

// Styles
import {
    PlayersContainerStyles,
    TitleFieldStyles,
    LabelFieldStyles,
    InputFieldStyles
} from "./players-name.styles";

// Actions
import {
    updatePlayer1Name,
    updatePlayer2Name
} from "../../redux/players/players.actions";

const PlayersNames = ({p1Name, p2Name, updateP1, updateP2}) => {
    return (
        <PlayersContainerStyles>
            <TitleFieldStyles>Players Names</TitleFieldStyles>
            <LabelFieldStyles>Player 1</LabelFieldStyles>
            <InputFieldStyles
                type="text" 
                name="name1" 
                value={p1Name} 
                onChange={updateP1}
                maxLength="8"
                autocomplete="off"
            />
            <LabelFieldStyles>Player 2</LabelFieldStyles>
            <InputFieldStyles
                type="text" 
                name="name2" 
                value={p2Name} 
                onChange={updateP2}
                maxLength="8"
                autocomplete="off"
            />
        </PlayersContainerStyles>
    );
};

const mapStateToProps = ({players}) => ({
    p1Name: players.player1Name,
    p2Name: players.player2Name
});

const mapDispatchToProps = dispatch => ({
    updateP1: event => dispatch(updatePlayer1Name(event)),
    updateP2: event => dispatch(updatePlayer2Name(event))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayersNames);