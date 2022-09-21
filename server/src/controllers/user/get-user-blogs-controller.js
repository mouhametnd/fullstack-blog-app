const { getUserBlogsService } = require('../../services/user/get-user-blogs-service');
const { getPaginationNums } = require('../../utils/get-pagination-nums');

const getUserBlogsController = async (req, res) => {
  const { sortBy } = req.query;
  const { blogsToSend, blogsToSkip } = getPaginationNums(req.query);
  const { username } = res.locals.verified.payload;
  const result = await getUserBlogsService({ username, blogsToSend, blogsToSkip, sortBy });
  
  if (result.error) res.status(406);
  res.json(result);
};

module.exports = {
  getUserBlogsController,
};

