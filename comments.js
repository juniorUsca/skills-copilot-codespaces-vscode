// Create web server
// 1. Create a new Express app
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for DELETE /comments/:id
// 5. Listen on port 3000

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = [];

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).json(comment);
});

app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    comments.splice(id, 1);
    res.sendStatus(204);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
