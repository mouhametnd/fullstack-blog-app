const { updateBlogVotesService } = require('../../services/blogs/update-blog-votes-service');

const updateBlogVotesController = async (_, res) => {
  const { blog, user } = res.locals;
  const result = await updateBlogVotesService(blog, user._id.toString());

  if (result.error) res.status(500);
  res.json(result);
};

module.exports = {
  updateBlogVotesController,
};
