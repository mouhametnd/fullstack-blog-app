const { ObjectId } = require('mongodb');
const { getCollection } = require('../../utils/get-collection');
const { isIdValid } = require('../../utils/is-id-valid');
const { sourceNotFoundSender } = require('../../utils/source-not-found-sender');

const updateBlogVotesMiddleware = async (req, res, next) => {
  const { blogId } = req.params;
  if (!isIdValid(blogId)) return sourceNotFoundSender(res);

  const blogsCollection = getCollection('blogs');
  const blog = await blogsCollection.findOne({ _id: ObjectId(blogId) });

  if (!blog) return sourceNotFoundSender(res);
  res.locals.blog = blog;
  next();
};

module.exports = {
  updateBlogVotesMiddleware,
};
