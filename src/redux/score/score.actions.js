import scoreTypes from "./score.types";

export const updateScore = val => ({
    type: scoreTypes.SET_SCORE,
    payload: val
});

export const resetScore = () => ({
    type: scoreTypes.RESET_SCORE
});