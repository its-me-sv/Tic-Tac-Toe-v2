import playerTypes from "./players.types";

export const updatePlayer1Name = event => ({
    type: playerTypes.SET_PLAYER_1_NAME,
    payload: event.target.value
});

export const updatePlayer2Name = event => ({
    type: playerTypes.SET_PLAYER_2_NAME,
    payload: event.target.value
});

export const resetPlayers = () => ({
    type: playerTypes.RESET_PLAYERS
});