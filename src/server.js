const app = require('./app');
const { connect } = require('./mongoose');

 
connect()
    .then(()=>{
        app.listen(process.env.SERVER_PORT || 3333);        
    })
    .catch((err)=>{
        console.error(err);
    });


