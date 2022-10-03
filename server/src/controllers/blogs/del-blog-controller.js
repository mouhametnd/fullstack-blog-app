const { ObjectId } = require('mongodb');
const { delBlogService } = require('../../services/blogs/del-blog-service');

const deleteBlogController = async (req, res) => {
  const { blogId } = req.params;
  const { username } = res.locals.verified.payload;
  const result = await delBlogService(ObjectId(blogId), username);

  if (result.error) res.status(404);

  res.json(result);
};

module.exports = {
  deleteBlogController,
};
