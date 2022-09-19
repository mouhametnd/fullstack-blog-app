const { getCollection } = require('../../utils/get-collection');

const blogsController = async (req, res) => {
  const blogsCollection = getCollection('blogs');
  try {
    const result = await blogsCollection.find({}, { userCreator: 0, likes: 0, disLikes: 0 }).toArray();
    res.json({ result });
  } catch (err) {
    res.status(406);
    res.json({ error: 'Error Fetching blogs ' });
  }
};

module.exports = {
  blogsController,
};
