import { Router} from "express"
import { create, get } from "../controller/ticket.controller.js"

const router = Router()

router.get('/',get)
router.post('/',create)

export default router