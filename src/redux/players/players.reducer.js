import playerTypes from "./players.types";

const INITIAL_STATE = {
    player1Name: "Player 1",
    player2Name: "Player 2"
};

const playersReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case playerTypes.RESET_PLAYERS:
            return {
                player1Name: "Player 1",
                player2Name: "Player 2"
            };
        case playerTypes.SET_PLAYER_1_NAME:
            return {
                ...state,
                player1Name: action.payload
            };
        case playerTypes.SET_PLAYER_2_NAME:
            return {
                ...state,
                player2Name: action.payload
            };
        default:
            return state;
    }
};

export default playersReducers;