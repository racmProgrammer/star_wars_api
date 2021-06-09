const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:27017/${process.env.DB_NAME}?authSource=admin`, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("MongoDB Connected");
    }catch(err){
        throw new Error(err.message);
    }
}

const planetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    climate: {
        type: String,
        required: true
    },
    terrain: {
        type: String,
        required: true
    },
    apparitionsAmount: {
        type: Number,
        required: true
    }
  });

const Planet = mongoose.model('Planet', planetSchema);

module.exports = {connect, Planet };