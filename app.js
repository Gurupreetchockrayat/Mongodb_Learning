const express = require('express');
const app = express();

const userModel = require('./usermodal')
app.get('/', (req, res) => {
    res.send("all right!")
})


app.get('/create', async (req, res) => {
  let createdUser =  await userModel.create({
        username: 'raj',
        email:'rajv@gmail.com',
        
    })
    res.send(createdUser)
})

app.get('/read', async (req, res) => {
    let readUser = await userModel.find()
    res.send(readUser)
})
app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({username:'rajeev'}, {username:'priya'}, {new:true})
    res.send(updatedUser)
})



app.get('/delete', async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({username:'rajeev'})
    res.send(`Delted user is ${deletedUser}`)
})
app.listen(3000);