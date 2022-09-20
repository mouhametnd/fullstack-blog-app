const { updateBlogService } = require('../../services/blogs/update-blog-service');

const updateBlogController = async (req, res) => {
  const { blogId } = req.params;
  const { title, description } = req.body;
  const lastUpdate = new Date();
  const result = await updateBlogService({ blogId, description, lastUpdate, title });

  res.json(result)
};

module.exports = {
  updateBlogController,
};
