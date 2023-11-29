import Express  from "express";

const router = Express.Router();

router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'We are in home route',
        suman: 'Web Dev by Suman'
    })
})


export default router;