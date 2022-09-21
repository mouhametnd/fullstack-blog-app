const sourceNotFoundSender = resObj => {
  resObj.status(404);
  resObj.json({ error: 'source not found' });
};

module.exports = {
  sourceNotFoundSender,
};
