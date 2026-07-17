import express from 'express'
import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'
import habitRoutes from './routes/habitRouts'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import {isTesting} from '../env'


const app = express()
app.use(cors())
app.use(helmet())
app.use(morgan('dev',{
    skip:()=> isTesting()
}))

app.get('/health',(req,res)=>{
    // res.json({message:'hello'}).status(200)
    res.send('<button>click<click/>')
})

app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/habit',habitRoutes)



export {app}

export default app 