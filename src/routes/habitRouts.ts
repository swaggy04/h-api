import {Router} from 'express'

const router = Router()


router.get('/',(req,res)=>{
    res.json({message:"habits"})

})

router.get('/:id',(req,res)=>{
    res.json({message:"one habits"})

})

router.post('/',(req,res)=>{
    res.json({message:"habits created"})

})
router.put('/:id',(req,res)=>{
    res.json({message:"habits updated"})

})

router.delete('/:id',(req,res)=>{
    res.json({message:"habits deleted"})

})

export default router