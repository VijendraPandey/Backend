const express = require('express');

const app = express();

app.use(express.json());

let notes = [];

app.get('/notes', (req, res) => {
    res.json(notes);
})

app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.json({
        message: 'Note added successfully'
    });
});

app.patch('/notes/:index', (req, res) => {
    const index = parseInt(req.params.index);

    notes[index] = {
        ...notes[index],
        ...req.body
    };

    res.json({
        message: 'Note updated successfully'
    })
})

app.delete('/notes/:index', (req, res) => {
    const index = parseInt(req.params.index);

    notes.splice(index, 1);

    res.json({
        message: 'Note deleted successfully'
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});