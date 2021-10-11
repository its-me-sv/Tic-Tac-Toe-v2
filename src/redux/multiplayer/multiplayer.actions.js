import multiplayerTypes from "./multiplayer.types";

export const setCurrName = name => ({
    type: multiplayerTypes.SET_CURRENT_NAME,
    payload: name
});

export const setCurrId = id => ({
    type: multiplayerTypes.SET_CURRENT_ID,
    payload: id
});

export const setPlayer2 = name => ({
    type: multiplayerTypes.SET_PLAYER_2,
    payload: name
});

export const setWeapon = weapon => ({
    type: multiplayerTypes.SET_WEAPON,
    payload: weapon
});

export const updateBoard = (pos, val) => ({
    type: multiplayerTypes.UPDATE_BOARD,
    payload: {pos, val}
});

export const setChance = () => ({
    type: multiplayerTypes.SET_CHANCE
});

export const resetMultiplayer = () => ({
    type: multiplayerTypes.RESET_MULTIPLAYER
});

export const setRoomId = id => ({
    type: multiplayerTypes.SET_ROOM_ID,
    payload: id
});

export const setResult = result => ({
    type: multiplayerTypes.SET_RESULT,
    payload: result
});

export const updateState = obj => ({
    type: multiplayerTypes.UPDATE_STATE,
    payload: {...obj}
});

export const newGame = () => ({
    type: multiplayerTypes.NEW_GAME
});