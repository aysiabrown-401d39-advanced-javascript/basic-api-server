'use strict';

const express = require('express');
const Pets = require('../models/pet');
const pets = new Pets();

const router = express.Router();

router.get('/pets', getAllPets);
router.get('/pets/:id', getOnePet);
router.post('/pets',createPet);
router.put('/pets/:id', updatePet);
router.delete('/pets/:id', deletePet);

function getAllPets(req, res) {
    const allPets = pets.get();
    res.status(200).json(allPets);
}

function getOnePet(req,res) {
    const id = req.params.id;
    const aPet = pets.get(id);
    res.status(200).json(aPet);
}

function createPet(req, res) {
    const obj = req.body;
    const addPet = pets.create(obj);
    res.status(200).json(addPet);
}


function updatePet(req, res) {
    const obj = req.body;
    const id = req.params.id;
    pets.update(id, obj);
    res.status(200).send('Updating pet...')
}


function deletePet(req, res) {
    const id = req.params.id;
    pets.delete(id);
    res.status(200).send('Deleting pet...')
}

module.exports = router;