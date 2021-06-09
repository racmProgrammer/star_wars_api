const instanceAxios = require('../axios');
const { Planet } = require('../mongoose');

module.exports.createPlanet = async (request, response) => {
    const {name, climate, terrain} = request.body;
    
    try{
        let res = await instanceAxios.get(`?search=${name}`);
        const {results} = res.data;
        let apparitionsAmount = 0;

        if(results.length > 0){
            apparitionsAmount = results[0].films.length;
        }
        
        Planet.create(
            {name, climate, terrain, apparitionsAmount},
            function(err, planet) {
                if(err){
                    return response.status(400).json({
                        message:"Error while inserting planet.",
                        error: err
                    });
                }
                response.status(201).json(planet);
            }
        );
    }catch(err){
        response.status(500).json({
            message: err.message
        });
    }    
}

module.exports.getPlanets = async(request, response) => {
    const {name} = request.query;

    Planet.find({name: new RegExp(name,'i')},function (err, planets) {
        if(err){
            return response.status(500).json({
                message:"Error while retrieving planets.",
                error: err
            });
        }
        response.status(200).json(planets);
    });
}

module.exports.getPlanetById = async(request, response) => {
    const {id} = request.params;

    Planet.findOne({_id: id},function (err, planet) {
        if(planet){
            return response.status(200).json(planet);
        }

        if(err){
            return response.status(500).json({
                message:"Error while retrieving planet",
                detail: err
            });
        }
        response.status(404).json({message: "Planet not found"});
    });

}

module.exports.removePlanet = async(request, response) => {
    const {id} = request.params;

    Planet.findByIdAndRemove(id, function(err, planet){
        if(planet){
            return response.status(200).json({
                message: `The planet ${planet.name} was deleted.`
            });
        }

        if(err){
            return response.status(500).json({
                message:"Error while removing planet.",
                detail: err
            });
        }
        return response.status(404).json({message: "Planet not found"});
    });
}
