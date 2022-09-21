const { addBlogService } = require('../../services/blogs/add-blog-service');

const addgetBlogController = async ({ body }, res) => {
  const { username, name } = res.locals.verified.payload;
  const userCreator = { username, name };
  const blogProps = { ...body, userCreator };
  const result = await addBlogService({ blogProps, username });

  if (result.error) res.status(506);
  res.json(result);
};

module.exports = {
  addgetBlogController,
};
