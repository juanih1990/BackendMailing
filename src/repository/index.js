import Mail from '../modules/mail.module.js'
import { UserDao, TicketDao } from "../DAO/factory.js";
import UserRepository from "./users.repository.js";
import TicketRepository from "./tickets.repository.js";

const ticketDao = new TicketDao()
const userDao = new UserDao()
const mailModule = new  Mail()


export const UserService = new UserRepository(userDao, ticketDao,mailModule)
export const TicketService = new TicketRepository(ticketDao)