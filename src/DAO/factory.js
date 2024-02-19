import config from '../config/config.js'
import mongoose from 'mongoose'
export let UserDao
export let TicketDao

console.log('PERSISTENCE: ', config.persistence)

switch (config.persistence) {
    case 'FILE':
        const { default: UserFile } = await import('./file/users.file.js')
        const { default: TicketFile } = await import('./file/tickets.file.js')

        UserDao = UserFile
        TicketDao = TicketFile
        break

    case 'MONGO':
        const mongoURL = config.mongo_url
        const mongoDBName = config.mongo_dbname
        await mongoose.connect(mongoURL, { dbName: mongoDBName })
        console.log('DB connected!')

        const { default: UserMongo } = await import('../DAO/mongo/user.mongo.js')
        const { default: TicketMongo } = await import('../DAO/mongo/tickets.mongo.js')

        UserDao = UserMongo
        TicketDao = TicketMongo
        break
    default:
        throw new Error(`Persistence dont recognized`)
}