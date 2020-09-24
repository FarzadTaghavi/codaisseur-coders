import axios from "axios";
import { API_URL } from "../../config/vars";

export function devsFetched(data) {
  return {
    type: "DEVS_FETCHED",
    payload: data,
  };
}

export function startLoading() {
  return {
    type: "START_LOADING",
  };
}

export async function fetchNext5Devs(dispatch, getState) {
  dispatch(startLoading());

  const offset = getState().developers.all.length;

  const res = await axios.get(`${API_URL}/developers?offset=${offset}&limit=5`);

  const moreDevs = res.data.rows;

  dispatch(devsFetched(moreDevs));
}
