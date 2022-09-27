const wrongCredentialsSender = resObj => {
  resObj.status(400);
  resObj.json({ error: 'username or password is incorrect' });
};

module.exports = {
  wrongCredentialsSender,
};
