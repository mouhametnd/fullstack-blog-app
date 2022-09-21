const { ObjectId } = require('mongodb');
const { getCollection } = require('../../utils/get-collection');
const { isIdValid } = require('../../utils/is-id-valid');
const { sourceNotFoundSender } = require('../../utils/source-not-found-sender');
const { unauthorizedSender } = require('../../utils/unauthorized-sender');

const checkBlogCreatorMiddleware = async (req, res, next) => {
  try {
    const { blogId } = req.params;
    if (!isIdValid(blogId)) return sourceNotFoundSender(res);
    const _id = ObjectId(blogId);

    const blogsCollection = getCollection('blogs');
    const blog = await blogsCollection.findOne({ _id });
    if (!blog) throw new Error();

    const areUsernamesSame = res.locals.verified.payload.username === blog.userCreator.username;
    areUsernamesSame ? next() : unauthorizedSender(res);
  } catch (error) {
    res.json({ error: 'sever error while doing validations' });
  }
};

module.exports = {
  checkBlogCreatorMiddleware,
};
