const wrongCredentialsSender = resObj => {
  resObj.status(400);
  resObj.json({ error: 'user credentials wrong' });
};

module.exports = {
  wrongCredentialsSender,
};
