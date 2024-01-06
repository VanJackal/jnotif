const express = require('express')
const router = express.Router()
const {Bot} = require('./Discord/discord')
const db = require('./db')

const handler = new Bot(process.env.TOKEN)

router.post('/notify', async (req,res) => {
    console.log(req.body)
    const user = db.getUserFromKey(req.body.key)
    if(!user){
        res.sendStatus(403)
    } else {
        try {
            await handler.send(process.env.USERID, req.body?.message || "No Body", user.service)
            res.sendStatus(201)
        } catch (e){
            console.error(e)
            res.sendStatus(400)
        }
    }
})

module.exports = {
    router
}