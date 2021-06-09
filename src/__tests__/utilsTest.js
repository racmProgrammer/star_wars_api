const {Planet} = require('../mongoose');

function createPlanet(){
    return Planet.create({name: "Tatooine", climate: "Quente", terrain: "Arenoso", apparitionsAmount: 0});
}

function verifyPlanet(apiPlanet, createdPlanet){
    expect(apiPlanet.name).toBe(createdPlanet.name);
    expect(apiPlanet.climate).toBe(createdPlanet.climate);
    expect(apiPlanet.terrain).toBe(createdPlanet.terrain);
    expect(apiPlanet.apparitionsAmount).toBe(createdPlanet.apparitionsAmount);
}

module.exports = {createPlanet, verifyPlanet};