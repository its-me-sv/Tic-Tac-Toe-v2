import scoreTypes from "./score.types";

const INITIAL_STATE = {
    scoreArray: [0, 0, 0, 0]
};

const scoreReducer = (state =INITIAL_STATE, action) => {
    switch (action.type) {
        case scoreTypes.SET_SCORE: {
            let scores = [...state.scoreArray];
            scores[0] += 1;
            scores[action.payload] += 1;
            return {
                ...state,
                scoreArray: [...scores]
            };
        }
        case scoreTypes.RESET_SCORE:
            return {
                ...state,
                scoreArray: [0, 0, 0, 0]
            };
        default:
            return state;
    }
};

export default scoreReducer;