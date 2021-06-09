const request = require('supertest');
const app = require("../../src/app.js");
const mongoose = require('mongoose');
const {Planet, connect} = require('../mongoose');
const axios = require('../axios');
const {createPlanet, verifyPlanet} = require('./utilsTest.js');

jest.mock('../axios');

let connection;

const mock = {
            data:{
                results:[{
                    films:[
                        '1',
                        '2'
                    ]
                }]
            }
        };

describe('Test planets', ()=>{
    
    beforeAll(async() => {
        connection = await connect();
    });

    beforeEach(async() => {
        await Planet.deleteMany();
        axios.get.mockImplementationOnce(() => Promise.resolve(mock));
    });

    afterAll(async () => {
        // await Planet.remove({});
        mongoose.connection.close();
    });

    afterEach(async () =>{
        jest.fn().mockReset();
    });


// Create tests
    it("should create new planet", async () =>{
        const planet = {
            name: "Alderaan",
            climate: "Quente",
            terrain: "Arenoso"                
        };

        const resp = await request(app)
            .post('/planet')
            .send(planet);

        expect(resp.status).toBe(201);
        verifyPlanet(resp.body,
        {...planet,
            apparitionsAmount: mock.data.results[0].films.length
        });
        
    });

    it("should return an error when try to create a planet without the required fields", async () =>{
        const planet = {
            name: "Alderaan",              
        };

        const resp = await request(app)
            .post('/planet')
            .send(planet);

        expect(resp.status).toBe(400);
        expect(resp.body.error.errors).toHaveProperty("climate");
        expect(resp.body.error.errors).toHaveProperty("terrain");
        
    });

  
// Return planets tests
    it("should return an array of planets", async () => {
        let createdPlanet = (await createPlanet()).toJSON();
        const response = await request(app).get('/planet');

        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
        verifyPlanet(response.body[0], createdPlanet);
    });

    it("should return a planets by id", async () => {
        let createdPlanet = (await createPlanet()).toJSON();
        const response = await request(app).get(`/planet/${createdPlanet._id}`);

        expect(response.status).toBe(200);
        verifyPlanet(response.body, createdPlanet);
    });

    it("should return an error when id not found", async () => {
        let createdPlanet = (await createPlanet()).toJSON();
        const response = await request(app).get(`/planet/${createdPlanet._id[2]}`);
        
        expect(response.status).toBe(500);
        expect(response.body.detail.name).toBe("CastError");
        expect(response.body.detail.message)
            .toBe(`Cast to ObjectId failed for value "${createdPlanet._id[2]}" (type string) at path "_id" for model "Planet"`);
    });

    it("should return a planets by name", async () => {
        let createdPlanet = (await createPlanet()).toJSON();
        const response = await request(app).get(`/planet?name=${createdPlanet.name}`);
        
        expect(response.status).toBe(200);
        verifyPlanet(response.body[0], createdPlanet);
    });

    it("should return an error when name not found", async () => {
        let createdPlanet = (await createPlanet()).toJSON();
        const response = await request(app).get(`/planet?name=${createdPlanet.name+"test"}`);
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });


// Remove planet tests
    it("should delete a planet", async () => {
        let createdPlanet = (await createPlanet()).toJSON();
        const response = await request(app).delete(`/planet/${createdPlanet._id}`);
        
        expect(response.status).toBe(200);
        expect(response.body.message).toBe(`The planet ${createdPlanet.name} was deleted.`);
    });

    it("should return an error when try to remove planet that doesn´t exists", async () => {
        let createdPlanet = (await createPlanet()).toJSON();
        const response = await request(app).delete(`/planet/${createdPlanet._id[2]}`);
        
        expect(response.status).toBe(500);
        expect(response.body.detail.name).toBe("CastError");
        expect(response.body.detail.message)
            .toBe(`Cast to ObjectId failed for value "${createdPlanet._id[2]}" (type string) at path "_id" for model "Planet"`);
    });

})


