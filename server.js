const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    tasks.push(req.body);
    res.send("Task added");
});

app.delete('/tasks/:index', (req, res) => {
    tasks.splice(req.params.index, 1);
    res.send("Task deleted");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});