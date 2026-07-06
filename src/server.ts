import express from 'express'

const app = express()

app.get('/health',(req,res)=>{
    // res.json({message:'hello'}).status(200)
    res.send('<button>click<click/>')
})

export {app}

export default app 