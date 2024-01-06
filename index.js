const express = require("express")
const {router} = require("./routes")

const app = express()

const port = process.env.PORT || 5000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.ORIGIN);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Credentials","true")
    next();
});

app.use(express.json())

app.use('*', (req,res,next) => {
    console.log(`request: ${req.method} ${req.originalUrl}`)
    next()
})

// # ROUTES
app.use('/',router)

app.use((err,req,res,next) => {
    console.error(err)
    next()
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})