const { userBlogService } = require('../../services/user/user-blogs-service');

const userBlogsController = async (req, res) => {
  let { page, perPage } = req.query;
  page = +page || 1;
  perPage = +perPage || 5;
  const { username } = res.locals.verified.payload;

  const { error, result } = await userBlogService({ username, page, perPage });

  
  if (error) {
    res.status(406);
    res.json({ error });
    return;
  }

  res.json({ result });
};

module.exports = {
  userBlogsController,
};
