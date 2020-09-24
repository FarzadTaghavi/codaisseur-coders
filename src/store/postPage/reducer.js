const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default function postPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "startLoadingPost": {
      return {
        loading: true,
        post: null,
        comments: [],
      };
    }
    case "postFullyFetched": {
      return {
        loading: false,
        post: action.payload.post,
        comments: action.payload.comments,
      };
    }
    default: {
      return state;
    }
  }
}
