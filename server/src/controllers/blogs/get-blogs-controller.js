const { getBlogsService } = require('../../services/blogs/get-blogs-service');
const { getPaginationNums } = require('../../utils/get-pagination-nums');

const getBlogsController = async (req, res) => {
  const { sortBy } = req.query;
  const { blogsToSend, blogsToSkip } = getPaginationNums(req.query);
  const result = await getBlogsService({ blogsToSend, blogsToSkip, sortBy });
  if (result.error) res.status(500);
  res.json(result);
};

module.exports = {
  getBlogsController,
};
