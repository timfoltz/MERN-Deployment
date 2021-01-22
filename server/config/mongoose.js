const mongoose = require('mongoose');
const db = "pirate-crew"



mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false   
})
.then(()=> console.log(`you have connected to the ${db}`))
.catch((err) => console.log(err))



require("../models/Pirate")