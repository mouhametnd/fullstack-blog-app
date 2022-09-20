const wrongDTOSender   = (res) => { 
  res.status(400)
    res.json({error: "DTO is not valid"})
}

module.exports = {
  wrongDTOSender
}