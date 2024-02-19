export default class UserRepository {
    constructor(userDao, ticketDao , mailModule) {
        this.userDao = userDao
        this.ticketDao = ticketDao
        this.mailModule = mailModule
    }
    get = async () => {
        console.log("ENTRO AL REPOSITORY")
        return this.userDao.get()
    }
    getById = async id => { return this.userDao.getByID(id) }
    create = async (data) => {
        return this.userDao.create(data)
    }
    addTicket = async (userID, ticketID) => {

        const user = await this.userDao.getByID(userID)

        if (!user) { throw new Error('User not found') }
        const ticket = await this.ticketDao.getByID(ticketID)

        if (!ticket) { throw new Error('ticket not found') }

        user.tickets.push(ticketID)

        return this.userDao.update(user)
    }
    
    reminder = async(userId) =>{
        const user = await this.userDao.getByID(userId)
        let html = `Mr ${user.name} , your tickets: <hr><ul>`
        for(const tickeID of user.tickets){
            const ticket = await this.ticketDao.getByID(tickeID)
            html += `<li>${ticket.name}: ${ticket.description}</li>`
        }
        html += `</ul>`
        const result = this.mailModule.send(user, "reminder Tickets" , html)
        return result
    }

}