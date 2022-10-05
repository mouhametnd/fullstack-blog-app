const { sortQueries } = require('../constants/sort-queries');

const getSortedBy = query => {
  let sortedQuery = sortQueries[query];
  if (!sortedQuery) sortedQuery = {};
  return sortedQuery;
};

module.exports = {
  getSortedBy,
};
