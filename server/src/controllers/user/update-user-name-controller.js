const { updateBlogsUserCreatorService } = require("../../services/blogs/update-blogs-user-creator-service");
const { updateUserNameService } = require("../../services/user/update-user-name-service");

const updateUserNameController = async (req, res) => {
  const { newName } = req.body;
  const {username}= res.locals.verified.payload

  const {error, result} = await updateUserNameService({newName, username})

  if(error){
    res.status(400)
    res.json({error})
    return
  }

  const updateBlogsUserCreator = await updateBlogsUserCreatorService({ newName, username });

  if (updateBlogsUserCreator.error) {
    res.status(503);
    res.json({ error });
    return;
  }


  res.json(result)


};
module.exports = {
  updateUserNameController
}