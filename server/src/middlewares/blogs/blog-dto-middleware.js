const { blogDTOValidator } = require('../../dto/blogs/blog-dto-validator');
const { invalidDTOSender } = require('../../utils/invalid-dto-sender');

const blogDTOMiddleware = (req, res, next) => (blogDTOValidator(req.body) ? next() : invalidDTOSender(res));

module.exports = {
  blogDTOMiddleware,
};
