import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    name: String,
    description: String,
    code: {
        type: String,
        unique: true
    }
});

const ticketModel = mongoose.model('tickets', ticketSchema);

export default ticketModel