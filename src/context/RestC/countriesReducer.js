import {
  SET_LOADING,
  GET_COUNTRIES,
  GET_COUNTRY,
  SET_REGION,
  SET_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };

    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
        loading: false,
      };

    case SET_REGION:
      return {
        ...state,
        region: action.payload,
      };

    default:
      return state;
  }
};
