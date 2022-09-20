const { blogDTOValidator } = require('../../dto/blogs/blog-dto-validator');

const blogDTOMiddleware = (req, res, next) => {
  if (!blogDTOValidator(req.body)) {
    res.status(406);
    res.json({
      error: 'DTO is not valid',
    });
    return;
  }

  next()
};

module.exports = {
  blogDTOMiddleware,
};
