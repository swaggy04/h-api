import { Router } from "express";

const router = Router()


router.post('/register',(req,res)=>{
    res.status(201).json({message:"user is registered"})

})

router.post('/login',(req,res)=>{
    res.status(201).json({message:"user is logged in"})

})


export default router