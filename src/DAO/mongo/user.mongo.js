import userModel from "../mongo/models/user.model.js"

export default class UserDAO {
  
    get = async () => { return userModel.find() }
    create = async (data) => { return userModel.create(data)}
    getByID = async (_id) => { return userModel.findById(_id)}
    update = async data => { return userModel.updateOne({_id: data._id} , data)}
}