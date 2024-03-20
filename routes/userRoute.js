import { Router } from "express";
import { allTicketsByUser, changePassword, forgotPassword, logOut, login, resetPassword, signup, getAllUsers} from "../controller/userController.js";
import { authUser }  from "../middleware/auth.js";

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logOut);
router.get('/:id', authUser, allTicketsByUser);
router.post('/forgot-password', forgotPassword)
router.put('/reset-password/:token', resetPassword)
router.put('/change-password', authUser,  changePassword)
router.get('/', getAllUsers)

export default router;