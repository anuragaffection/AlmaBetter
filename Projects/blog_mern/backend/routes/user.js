import Express from "express";
import { userRegister, userLogin, userLogout } from "../controllers/user.js";


const router = Express.Router();


router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'We are in home route',
        suman: 'Web Dev by Suman'
    })
})


router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/logout', userLogout);


export default router;