import dotenv from 'dotenv'

dotenv.config()

export default {
    persistence: process.env.PERSISTENCE,
    mongo_url: process.env.MONGO_URL,
    mongo_dbname: process.env.MOGNO_DBNAME,
    port: process.env.PORT || 8080,
    mailUser : process.env.MAIL_USER,
    mailPass : process.env.MAIL_PASS
}
