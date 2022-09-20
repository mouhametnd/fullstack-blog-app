const { updateBlogVotesService } = require('../../services/blogs/update-blog-votes-service');

const updateBlogVotesController = async (req, res) => {
  const { blog, user } = res.locals;
  const { result, error } = await updateBlogVotesService(blog, user._id);

  if (error) {
    res.status(500);
    res.json({ error });
  }
  res.json({ result });
};

module.exports = {
  updateBlogVotesController,
};
