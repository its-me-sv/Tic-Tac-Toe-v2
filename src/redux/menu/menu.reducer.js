import menuTypes from "./menu.types";

const INITIAL_STATE = {
    player2: null,
    player1Tool: null,
    menuLevel: 0
};

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case menuTypes.SET_NO_OF_PLAYERS:
            return action.payload === 1 
                ? {...state, player2: "Computer", menuLevel: 1, noOfPlayers: 1}
                : {...state, player2: "Player 2", menuLevel: 1, noOfPlayers: 2};
        case menuTypes.SET_PLAYER_1_TOOL:
            return {
                ...state,
                player1Tool: action.payload,
                menuLevel: 2
            };
        case menuTypes.SET_MENU_LEVEL:
            return {
                ...state,
                menuLevel: action.payload
            };
        case menuTypes.RESET_MENU:
            return {
                noOfPlayers: null,
                player2: null,
                player1Tool: null,
                menuLevel: 0
            };
        default:
            return state;
    }
};

export default menuReducer;