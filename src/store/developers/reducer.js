const initialState = {
  loading: false,
  all: [],
};

export default function developerSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "START_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "DEVS_FETCHED": {
      return {
        loading: false,
        all: [...state.all, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
