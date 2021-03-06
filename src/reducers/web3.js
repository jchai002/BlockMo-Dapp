import { WEB3_INITIALIZED } from "app/actions/types";

const web3Reducer = (
  state = {
    web3: null
  },
  action
) => {
  if (action.type === WEB3_INITIALIZED) {
    return action.payload || null;
  }

  return state;
};

export default web3Reducer;
