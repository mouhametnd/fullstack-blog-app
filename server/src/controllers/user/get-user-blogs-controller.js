const { getUserBlogService } = require('../../services/user/get-user-blogs-service');
const { getPaginationNums } = require('../../utils/get-pagination-nums');

const getUserBlogController = async (req, res) => {
  const { sortBy } = req.query;
  const { blogsToSend, blogsToSkip } = getPaginationNums(req.query);
  const { username } = res.locals.verified.payload;
  const result = await getUserBlogService({ username, blogsToSend, blogsToSkip, sortBy });
  
  if (result.error) res.status(406);
  res.json(result);
};

module.exports = {
  getUserBlogController,
};

