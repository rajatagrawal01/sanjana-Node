const express = require('express')

// import express from 'express';
const app = express();
app.use(express.json());

const products = [
    { id: 1, name: 'Mechanical Keyboard' },
    { id: 2, name: 'Ergonomic Mouse' }
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ error: 'Product not found.' });
    }
    res.json(product);
});

app.post('/api/products', (req, res) => {
    const { name } = req.body;
    
    if (!name) {
        return res.status(400).json({ error: 'Name field is mandatory.' });
    }

    const newProduct = { id: products.length + 1, name };
    products.push(newProduct);
    
    res.status(201).json(newProduct);
});

app.listen(3000);