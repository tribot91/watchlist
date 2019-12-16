import { combineReducers } from "redux";
import SelectMovieReducer from "./selectMovieReducer";

const rootReducer = combineReducers({
    isOnWatchlist: SelectMovieReducer
});

export default rootReducer;
