import * as actionTypes from './actionTypes';
import firebase, { firebaseRef } from '../../firebase';

export const setSearchText = (searchText) => {
  return {
    type: actionTypes.SET_SEARCH_TEXT,
    searchText
  };
};
export const getCards = (cards) => {
    return {
      type: actionTypes.GET_CARDS,
      cards
    };
};

export var startGetCards = () => {
    return (dispatch, getState) => {
      var cardsRef = firebaseRef.child('cards');
      return cardsRef.once('value').then((snapshot) => {
        var cards = snapshot.val() || {};
        var parsedCards = [];
        console.log("TH CARDS IN ACTION CREATORS ", cards);
        Object.keys(cards).forEach((cardId) => {
            parsedCards.push({
            id: cardId,
            ...cards[cardId]
          });
        });
        dispatch(getCards(parsedCards));
      });
    };
  };
