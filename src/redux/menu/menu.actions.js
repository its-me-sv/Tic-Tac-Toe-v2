import menuTypes from "./menu.types";

export const noOfPlayers = val => ({
    type: menuTypes.SET_NO_OF_PLAYERS,
    payload: val
});

export const setMenuLevel = val => ({
    type: menuTypes.SET_MENU_LEVEL,
    payload: val
});

export const setPlayer1Tool = val => ({
    type: menuTypes.SET_PLAYER_1_TOOL,
    payload: val
});

export const resetMenu = () => ({
    type: menuTypes.RESET_MENU
});