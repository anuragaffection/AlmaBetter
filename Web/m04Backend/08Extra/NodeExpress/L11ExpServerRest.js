const express = require('express');
const app = express();

app.use(express.json()); // middleware 


let data = [
    { id: 1, name: 'John', age: 20 },
]; // Your data storage - for demo purposes, using a simple array


app.get('/', (req, res) => {
    res.json(data);
});


// GET request - Fetch all items
app.get('/items', (req, res) => {
    res.json(data);
});

// POST request - Create a new item
app.post('/items', (req, res) => {
    const newItem = req.body;
    data.push(newItem);
    res.status(201).json(newItem);
});

// PUT request - Update an existing item
app.put('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;

    data = data.map(item => {
        if (item.id === itemId) {
            return { ...item, ...updatedItem };
        }
        return item;
    });

    res.json(updatedItem);
});

// DELETE request - Delete an item
app.delete('/items/:id', (req, res) => {
    const itemId = req.params.id;
    data = data.filter(item => item.id !== itemId);
    res.sendStatus(204);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
