const { ObjectId } = require('mongodb');
const { getCollection } = require('../../utils/get-collection');
const { isIdValid } = require('../../utils/is-id-valid');
const { wrongIdSender } = require('../../utils/wrong-id-sender');

const blogController = async (req, res) => {
  const { blogId } = req.params;
  if (!isIdValid(blogId)) return wrongIdSender(res)

  try {
    const blogsCollection = getCollection('blogs');
    const result = await blogsCollection.findOne({ _id: ObjectId(blogId) });
    res.json({ result });
  } catch (err) {
    res.status(404);
    res.json({ error: 'Error fetching blog' });
  }
};

module.exports = {
  blogController,
};
