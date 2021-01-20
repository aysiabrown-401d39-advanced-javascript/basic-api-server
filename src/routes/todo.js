'use strict';

const express = require('express');
const ToDo = require('../models/todo');
const tasks = new ToDo();

const router = express.Router();

router.get('/todo', getAllTasks);
router.get('/todo/:id', getOneTask);
router.post('/todo',createTask);
router.put('/todo/:id', updateTask);
router.delete('/todo/:id', deleteTask);

function getAllTasks(req, res) {
    const all = tasks.get();
    res.status(200).json(all);
}

function getOneTask(req,res) {
    const id = req.params.id;
    const oneTask = tasks.get(id);
    res.status(200).json(oneTask);
}

function createTask(req, res) {
    const obj = req.body;
    const add = tasks.create(obj);
    res.status(200).json(add);
}


function updateTask(req, res) {
    const obj = req.body;
    const id = req.params.id;
    const update = tasks.update(id, obj);
    res.status(200).json(update);
}


function deleteTask(req, res) {
    const id = req.params.id;
    tasks.delete(id);
    res.status(200).send('Deleting task...')
}

module.exports = router;