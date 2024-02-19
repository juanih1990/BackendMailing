export default class TicketRepository {
    constructor(dao) {
        this.dao = dao
    }
    get = async () => { return this.dao.get() }
    getById = async id => { return this.dao.getById(id) }
    create = async (data) => { return this.dao.create(data)}

}