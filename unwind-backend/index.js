const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const Tracker = require('./models/Tracker')
const User = require('./models/User')
const Team = require('./models/Team')
const app = express()
const PORT = 4000
const DB_URL = 'mongodb+srv://pranav:zagade1998@cluster0.gk7ox.mongodb.net/unwind?retryWrites=true&w=majority'

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/user', async (req,res) => {
    const newUser = new User({
        name: 'Manas',
        username: 'manas1998',
        password: 'manas1998',
        team: mongoose.Types.ObjectId("61a46a025c55a19ec0b3a013")
    })

    await newUser.save()
    return res.json({message: 'Hello World'})
})

app.get('/data', async(req,res)=> {
    const user = await User.findById("61a46af3594e4b83eea23224").populate({path: 'team', populate: {path:'members', model: 'User'}})

    res.json(user)
})

app.get('/team', async (req,res) => {
    const newTeam = new Team({
        name:'Team A'
    })

    await newTeam.save()

    return res.json({message: 'Team created'})
})

app.get('/login', (req,res) => {
    return res.json({message: 'This is login page'})
})

app.post('/tracking', async (req,res) => {
    const data = req.body
    
    Object.keys(data).map(async (activity) => {
        const tracker = new Tracker({
            task: activity,
            days: data[activity],
            user: mongoose.Types.ObjectId("61a46af3594e4b83eea23224")
        })

        await tracker.save()
    })

    return res.json({message: 'Tracking page'})
})

app.listen(PORT, () => {
    console.log('Server running at port', PORT)
})