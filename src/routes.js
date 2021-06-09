const express = require('express');
const planetController = require('./controllers/planetController.js');
const routes = express.Router();

routes.post("/planet", planetController.createPlanet);
routes.get("/planet", planetController.getPlanets);
routes.get("/planet/:id", planetController.getPlanetById);
routes.delete("/planet/:id", planetController.removePlanet);

module.exports = routes;