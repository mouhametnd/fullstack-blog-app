const { ObjectId } = require('mongodb');
const { updateBlogDetailsService } = require('../../services/blogs/update-blog-service');

const updateBlogDetailsController = async (req, res) => {
  const { blogId } = req.params;
  const { title, description } = req.body;
  const lastUpdate = new Date();
  const _id = ObjectId(blogId);
  const result = await updateBlogDetailsService({ _id, description, lastUpdate, title });

  if (result.error) res.status(500);

  res.json(result);
};

module.exports = {
  updateBlogDetailsController,
};
