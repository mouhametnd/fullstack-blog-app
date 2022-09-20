const { ObjectId } = require('mongodb');
const { getCollection } = require('../../utils/get-collection');
const { isIdValid } = require('../../utils/is-id-valid');

const updateBlogVotesMiddleware = async (req, res, next) => {
  const { blogId } = req.params;
  if (!isIdValid(blogId)) {
    res.status(400);
    res.json({ error: 'DTO is not valid' });
    return;
  }
  const blogsCollection = getCollection('blogs');
  const blog = await blogsCollection.findOne({ _id: ObjectId(blogId) });

  if (!blog) {
    res.status(404);
    res.json({ error: 'Blog not found' });
    return;
  }
  res.locals.blog = blog;
  next();
};

module.exports = {
  updateBlogVotesMiddleware,
};
