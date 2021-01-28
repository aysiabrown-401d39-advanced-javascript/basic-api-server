'use strict';

const express = require('express');
const Products = require('../models/products');
const products = new Products();

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getOneProduct);
router.post('/products',addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

function getAllProducts(req, res) {
    const all = products.get();
    res.status(200).json(all);
}

function getOneProduct(req,res) {
    const id = req.params.id;
    const item = product.get(id);
    res.status(200).json(item);
}

function addProduct(req, res) {
    const obj = req.body;
    const add = products.create(obj);
    res.status(200).json(add);
}


function updateProduct(req, res) {
    const obj = req.body;
    const id = req.params.id;
    const update = products.update(id, obj);
    res.status(200).json(update);
}


function deleteProduct(req, res) {
    const id = req.params.id;
    products.delete(id);
    res.status(200).send('Removing item from inventory...');
}

module.exports = router;