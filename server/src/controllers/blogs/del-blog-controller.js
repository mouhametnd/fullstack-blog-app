const { delBlogService } = require('../../services/blogs/del-blog-service');

const delBlogController = async (req, res) => {
  const { blogId } = req.params;
  const { username } = res.locals.verified.payload;
  const result = await delBlogService(blogId, username);

  if (result.error) res.status(404);

  res.json(result);
};

module.exports = {
  delBlogController,
};
