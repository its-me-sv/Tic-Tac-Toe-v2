import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Reducers
import menuReducer from "./menu/menu.reducer";
import boardReducer from "./board/board.reducer";
import scoreReducer from "./score/score.reducer";
import playersReducers from "./players/players.reducer";
import multiplayerReducer from "./multiplayer/multiplayer.reducer";

// Persist Configuration
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['menu', 'board', 'score', 'players']
};

const rootReducer = combineReducers({
    menu: menuReducer,
    board: boardReducer,
    score: scoreReducer,
    players: playersReducers,
    multiplayer: multiplayerReducer
});

export default persistReducer(persistConfig, rootReducer);