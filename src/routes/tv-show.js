'use strict';

const express = require('express');
const TVShows = require('../models/tv-show');
const tvShows = new TVShows();

const router = express.Router();

router.get('/show', getAllShows);
router.get('/show/:id', getOneShow);
router.post('/show',createShow);
router.put('/show/:id', updateShow);
router.delete('/show/:id', deleteShow);

function getAllShows(req, res) {
    const allShows = tvShows.get();
    res.status(200).json(allShows);
}

function getOneShow(req,res) {
    const id = req.params.id;
    const oneShow = tvShows.get(id);
    res.status(200).json(oneShow);
}

function createShow(req, res) {
    const obj = req.body;
    const addShow = tvShows.create(obj);
    res.status(200).json(addShow);
}


function updateShow(req, res) {
    const obj = req.body;
    const id = req.params.id;
    tvShows.update(id, obj);
    res.status(200).send('Updating show details...')
}


function deleteShow(req, res) {
    const id = req.params.id;
    tvShows.delete(id);
    res.status(200).send('Deleting show...')
}

module.exports = router;