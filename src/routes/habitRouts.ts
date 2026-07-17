import {Router} from 'express'
import { validationBody } from '../middlewares/validation'
import {z} from 'zod/v3'

const createHabitschema=z.object({
    name:z.string()
 })

const router = Router()
 

router.get('/',(req,res)=>{
    res.json({message:"habits"})

})

router.get('/:id',(req,res)=>{
    res.json({message:"one habits"})

})

router.post('/',validationBody(createHabitschema),(req,res)=>{
    res.json({message:"habits created"})

})
router.put('/:id',(req,res)=>{
    res.json({message:"habits updated"})

})

router.delete('/:id',(req,res)=>{
    res.json({message:"habits deleted"})

})

export default router