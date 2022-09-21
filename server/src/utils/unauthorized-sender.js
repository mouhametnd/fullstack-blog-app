const unauthorizedSender = res => {
  res.status(401);
  res.json({ error: 'Unauthorized' });
};

module.exports = {
  unauthorizedSender,
};
