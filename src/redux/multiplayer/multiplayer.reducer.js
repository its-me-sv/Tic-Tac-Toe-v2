import multiplayerTypes from "./multiplayer.types";

const INITIAL_STATE = {
    currName: "Player 1",
    currId: "",
    roomId: "",
    player2: "Player 2",
    weapon: "",
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    isChance: false,
    result: null
};

const multiplayerReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case multiplayerTypes.SET_CURRENT_NAME:
            return {...state, currName: payload};
        case multiplayerTypes.SET_CURRENT_ID:
            return {...state, currId: payload};
        case multiplayerTypes.SET_PLAYER_2:
            return {...state, player2: payload};
        case multiplayerTypes.SET_WEAPON:
            return {...state, weapon: payload};
        case multiplayerTypes.UPDATE_BOARD: {
                let boardCopy = [...state.board];
                boardCopy[payload.pos] = payload.val;
                return {...state, board: boardCopy};
            }
        case multiplayerTypes.SET_ROOM_ID:
            return {...state, roomId: payload};
        case multiplayerTypes.SET_CHANCE:
            return {...state, isChance: !state.isChance};
        case multiplayerTypes.SET_RESULT:
            return {...state, result: payload};
        case multiplayerTypes.RESET_MULTIPLAYER:
            return {
                currName: "Player 1",
                currId: "",
                roomId: "",
                player2: "Player 2",
                weapon: "",
                board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                isChance: false,
                result: null
            };
        default:
            return state;
    }
};

export default multiplayerReducer;