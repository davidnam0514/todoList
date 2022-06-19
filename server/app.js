const express = require('express')
const cors = require('cors')
const app = express()

let todoList = []
app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.get('/todo-list', (req, res) => {
    res.status(200).json({data: todoList})
})

app.post('/add-todo', (req, res) => {
    todoList.push(req.body)
    res.status(200).json({ data: todoList, message: 'new todo added'})
})

app.post('/update-status', (req, res) => {
    // Todo...
    res.status(200).json({message: 'update completed'})
})

app.delete('/delete-todo/:id', (req, res) => {
    // todo..
    res.status(200).json({message: 'delete completed'})
})


app.listen(8000, () => {
    console.log('server is on port 8000')
})