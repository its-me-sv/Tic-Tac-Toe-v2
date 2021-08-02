import {combineReducers} from "redux";

// Reducers
import menuReducer from "./menu/menu.reducer";
import boardReducer from "./board/board.reducer";
import scoreReducer from "./score/score.reducer";

const rootReducer = combineReducers({
    menu: menuReducer,
    board: boardReducer,
    score: scoreReducer
});

export default rootReducer;