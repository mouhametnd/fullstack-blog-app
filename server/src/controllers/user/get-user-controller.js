const { error } = require('ajv/dist/vocabularies/applicator/dependencies');
const { getUserService } = require('../../services/user/get-user-service');

const getUserController = async (req, res) => {
  const { sortBy } = req.query;
  const { username } = res.locals.verified.payload;
  const { blogsNum } = req.query;
  const result = await getUserService({ username, sortBy: sortBy || 'random', maxNumOfBlogs: +blogsNum || 3 });

  if (result.error) res.status(400);
  res.json(result);
};

module.exports = {
  getUserController,
};
