interface postInterface {
  loading: boolean;
  post: object;
  error: boolean;
  count: number;
}
export const initialState = {
  loading: false,
  post: {},
  error: false,
  count: 0,
};
export const postReducer = (state: postInterface, action: any) => {
  switch (action.type) {
    case "FETCH_INITAL":
      return {
        ...state,
        loading: true,
        error: false,
        post: {},
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        post: {},
      };
    case "COUNT_INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
