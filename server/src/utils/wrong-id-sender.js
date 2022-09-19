const wrongIdSender = resObj => {
  resObj.status(400);
  resObj.json({ error: 'wrong id' });
};

module.exports = {
  wrongIdSender,
};
