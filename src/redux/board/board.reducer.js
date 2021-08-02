import boardTypes from "./board.types";

const INITIAL_STATE = {
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    currentPlayer: "Player 1"
};

const boardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case boardTypes.RESET_BOARD:
            return {
                board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                currentPlayer: "Player 1"
            };
        case boardTypes.UPDATE_BOARD: {
            let boardCpy = [...state.board];
            const {pos, val} = action.payload;
            boardCpy[pos] = val;
            return {
                ...state,
                board: [...boardCpy]
            };
        }
        case boardTypes.SET_CURRENT_PLAYER:
            return {
                ...state,
                currentPlayer: action.payload
            };
        default:
            return state;
    }
};

export default boardReducer;