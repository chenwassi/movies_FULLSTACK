const express = require('express')
const cors = require ('cors')
const app = express()

require('./config/usersDB')

app.use(cors())
app.use(express.json())

const usersRouter = require('./ROUTER/usersRouter')
const movieRouter = require('./ROUTER/moviesRouter')
const subscriptions = require('./ROUTER/subscriptionsRouter')
const membersRouter = require('./ROUTER/membersRouter')

app.use('/login' ,usersRouter)
app.use('/movies',movieRouter)
app.use('/subscriptions',subscriptions)
app.use('/members',membersRouter)

const port = 7000

app.listen(port,()=>{
    console.log(`app is listing to http://localhost:${port}`);
})