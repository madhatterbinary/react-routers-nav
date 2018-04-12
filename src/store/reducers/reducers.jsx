import * as actionTypes from '../actions/actionTypes';

export var cardsReducer = (state = [], action) => {
    switch (action.type) {
      case actionTypes.GET_CARDS:
        return [
          ...state,
          ...action.cards
        ];
      default:
        return state;
    }
  };

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TEXT:
      return action.searchText;
    default:
      return state;
  };
};
