const ajvRegex = {
  username: '^[A-Za-z][A-Za-z0-9_]{7,}$',
  password: '^[A-Za-z]([A-Za-z0-9_]){7,}$',
};

module.exports = {
  ajvRegex,
};
