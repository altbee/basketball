import actionTypes from '../constants';

const initialState = {
  showProfile: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTION_SHOW_PROFILE:
      return { ...state, showProfile: true };
    case actionTypes.ACTION_HIDE_PROFILE:
      return { ...state, showProfile: false };
    default:
      return state;
  }
};
