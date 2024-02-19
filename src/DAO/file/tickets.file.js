import FileManager from "./manager.file"

export default class ticketDAO {
    constructor() {
        this.fileManager = new FileManager('ticket.json')
    }

    get = async () => { return this.fileManager.get() }
    create = async (data) => { return this.fileManager.add(data)}
    getByID = async (_id) => { return this.fileManager.getOneByParam('_id', _id)}
    update = async data => { return this.fileManager.update(data)}
}