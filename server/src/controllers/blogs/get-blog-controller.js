const { ObjectId } = require('mongodb');
const { getBlogService } = require('../../services/blogs/get-blog-service');
const { isIdValid } = require('../../utils/is-id-valid');
const { sourceNotFoundSender } = require('../../utils/source-not-found-sender');

const getBlogController = async (req, res) => {
  const { blogId } = req.params;
  if (!isIdValid(blogId)) return sourceNotFoundSender(res);
  const { error, result } = await getBlogService(ObjectId(blogId));

  if (error) return sourceNotFoundSender(res);

  res.json({ result });
};

module.exports = {
  getBlogController,
};
