import boardTypes from "./board.types";

export const resetBoard = () => ({
    type: boardTypes.RESET_BOARD
});

export const updateBoard = (pos, val) => ({
    type: boardTypes.UPDATE_BOARD,
    payload: {pos, val}
});

export const updatePlayer = val => ({
    type: boardTypes.SET_CURRENT_PLAYER,
    payload: val
});