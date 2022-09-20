const { ObjectId } = require('mongodb');
const { getCollection } = require('../../utils/get-collection');
const { isIdValid } = require('../../utils/is-id-valid');
const { wrongIdSender } = require('../../utils/wrong-id-sender');

const checkBlogCreatorMiddleware = async (req, res, next) => {
  const { blogId } = req.params;
  if (!isIdValid(blogId)) return wrongIdSender(res);
  try {
    const _id = ObjectId(blogId);
    const blogsCollection = getCollection('blogs');
    const blog = await blogsCollection.findOne({ _id });
    if (!blog) throw blog;

    const areUsernamesSame = res.locals.verified.payload.username === blog.userCreator.username;

    if(!areUsernamesSame){
      res.status(400);
      res.json({error: "Unauthorized"})
      return;
    }

    next()

  } catch (error) {
    res.json({error: "Error doing validations"})
  }
};

module.exports = {
  checkBlogCreatorMiddleware
}