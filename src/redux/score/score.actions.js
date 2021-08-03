import scoreTypes from "./score.types";

export const updateScore = val => ({
    type: scoreTypes.SET_SCORE,
    payload: val
});

export const resetScore = () => ({
    type: scoreTypes.RESET_SCORE
});

export const updateResult = val => ({
    type: scoreTypes.UPDATE_RESULT,
    payload: val
});