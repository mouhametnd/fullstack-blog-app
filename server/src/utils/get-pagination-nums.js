const getPaginationNums = ({ page, perPage }) => {
  page = +page || 1;
  perPage = +perPage || 5;

  const blogsToSkip = page * perPage - perPage;
  const blogsToSend = page * perPage;
  
  return { blogsToSend, blogsToSkip };
};

module.exports = {
  getPaginationNums,
};
