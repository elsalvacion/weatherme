import { SET_LOADING, SET_ERROR, GET_WHETHER } from "./actionTypes";

const initState = {
  loading: false,
  whether: null,
  errors: null,
};
const whetherReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        errors: null,
      };
    case GET_WHETHER:
      return {
        ...state,
        whether: action.value,
        errors: null,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        errors: action.value,
        loading: false,
      };

    default:
      return state;
  }
};

export default whetherReducer;
