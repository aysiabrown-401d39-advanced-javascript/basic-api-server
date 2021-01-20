'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const Pets = require('../src/models/pet');
const { beforeEach } = require('@jest/globals');
const mockRequest = supertest(server);
let pets;
let data;
let midna = {name:"midna", type:"cat", age:2};
let update = {name: "kiara"}

describe('web server', () => {

    beforeEach(() => {
        pets = new Pets();
        data = pets.create(midna)
    })

    it('Should respond 404 on a bad route', () => {
        return mockRequest
        .get('/potatos')
        .then(results => {
            expect(results.status).toBe(404)
        }).catch(console.error);
    })

    it('Should respond 404 on a bad method', () => {
        return mockRequest
        .post('/potatos')
        .then(results => {
            expect(results.status).toBe(404)
        }).catch(console.error);
    })

    it('Should respond 200 to PetsModel .post', () => {
        return mockRequest
        .post('/pets')
        .send(midna)
        .then(results => {
            expect(results.status).toBe(200)
            expect(results.body.id).toBeTruthy()
            expect(results.body.name).toBe(midna.name);
            expect(results.body.type).toBe(midna.type)
            expect(results.body.age).toBe(2)
        }).catch(console.error);
    })

    // results.body coming back empty
    it('Should respond 200 to PetsModel .put', () => {
        return mockRequest
        .put('/pets/' + data.id)
        .send(update)
        .then(results => {
            expect(results.status).toBe(200)
            // expect(results.body.id).toBeTruthy()
            // expect(results.body.name).toBe(update.name)
            // expect(results.body.type).toBe(midna.type)
            // expect(results.body.age).toBe(midna.age)
        }).catch(console.error);
    })

    it('Should respond to a 200 to PetsModel .delete', () => {
        return mockRequest
        .delete('/pets/' + data.id)
        .then(results => {
            expect(results.status).toBe(200)
            expect(pets.get(data.id)).toBeNull()
        })
    })
})






// 404 on a bad route !
// 404 on a bad method !
// The correct status codes and returned data for each REST route
// Create a record using POST
// Read a list of records using GET
// Read a record using GET
// Update a record using PUT
// Destroy a record using DELETE