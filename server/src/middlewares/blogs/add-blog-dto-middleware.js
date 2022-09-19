const { addBlogDTOValidator } = require('../../dto/add-blog-dto-validator');

const addBlogDTOMiddleware = (req, res, next) => {
  if (!addBlogDTOValidator(req.body)) {
    res.status(406);
    res.json({
      error: 'DTO is not valid',
    });
    return;
  }

  next()
};

module.exports = {
  addBlogDTOMiddleware,
};
