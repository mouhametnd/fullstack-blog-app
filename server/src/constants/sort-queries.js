const sortQueries = {
  random: {},
  oldest: { lastUpdate: 1 },
  newest: { lastUpdate: -1 },
  mostVoted: { 'votes.total': -1 },
  lessVoted: { 'votes.total': 1 },
  title: { title: 1 },
};

module.exports = {
  sortQueries,
};
