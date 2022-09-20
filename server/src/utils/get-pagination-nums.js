const getPaginationNums = ({perPage, page}) => { 
  const booksToSkip = page * perPage - perPage;
  const booksToSend = page * perPage;
  return {booksToSend, booksToSkip}

}

module.exports= {
  getPaginationNums
}