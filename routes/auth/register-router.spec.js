const request = require('supertest');
const server = require('../../api/server.js');

const db = require('../../data/dbConfig.js');

describe('register-router testing', () => {

    describe('registering a user', () => {
        it('should return 201 OK', () => {
            // return db('users').truncate()
            //         .then(() => {
            //             return request(server).post('/api/register').send({ username: 'John', password: 'johnsnewpassword' })
            //         })
        })

        it('should return a JSON object', () => {

        })

        it('should return a token in the body', () => {

        })
    })
})