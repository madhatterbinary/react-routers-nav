
module.exports = {
  filterCards: function (cards, searchText) {
    var filteredCards = cards;


    // Filter by searchText
    filteredCards = filteredCards.filter((card) => {
      if(card.text !== undefined){
        var text = card.text.toLowerCase();
        return searchText.length === 0 || text.indexOf(searchText) > -1;
      }
    });

    // Sort cards
    filteredCards.sort((a, b) => {
      if (!a && b) {
        return -1;
      } else if (a && !b) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredCards;
  }
};
