import { UserService } from "../repository/index.js";

export const get = async (req, res) => {
    try {
        const users = await UserService.get()
        console.log("ENTRO AL CONTROLLER")
        return res.json({ status: 'success', payload: users })

    } catch (error) {
        console.error(error)
        return res.status(500).send({ status: 'error', error })
    }
}

export const create = async (req, res) => {
    try {
        const users = req.body
        const usersNew = await UserService.create(users)
        return res.json({ status: 'success', payload: usersNew })
    } catch (error) {
        console.error(error)
        return res.status(500).send({ status: 'error', error })

    }
}
export const addTicket = async (req, res) => {
    try {
        const { user: userID, ticket: ticketID } = req.query
        const result = await UserService.addTicket(userID, ticketID)
        return res.json({ status: 'success', payload: result })
    } catch (error) {
        console.error(error)
        return res.status(500).send({ status: 'error', error })

    }
}
export const reminder = async(req,res) => {
    const {userID} = req.params
    const result = await UserService.reminder(userID)
    return res.json({ status: 'success', payload: result })

}