import TicketModel from "../mongo/models/tickets.model.js"

export default class ticketDAO {
  
    get = async () => { return TicketModel.find() }
    create = async (data) => { return TicketModel.create(data)}
    getByID = async (_id) => { return TicketModel.findById(_id)}
    update = async data => { return TicketModel.update({_id: data_id} , data)}
}