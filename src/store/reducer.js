import { combineReducers } from "redux";
import feed from "./feed/reducer";
import postPage from "./postPage/reducer";
import developers from "./developers/reducer";
import auth from "./auth/reducer";

const reducer = combineReducers({
  feed,
  postPage,
  developers,
  auth,
});

export default reducer;
