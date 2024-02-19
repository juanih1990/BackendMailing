import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    tickets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tickets'
    }]
});

const UserModel = mongoose.model('users', userSchema);

export default UserModel