import { CREATE_SMS } from "../actions/types";

const initialState = {
  smsResponse: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_SMS:
      return {
          ...state,
          smsResponse: action.payload
      };

    default:
      return state;
  }
}
