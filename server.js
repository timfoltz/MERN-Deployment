const express = require('express');
const cors = require('cors');


const app = express();
const PORT = 8088;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


require('./server/config/mongoose');
require("./server/routes/routes")(app);





app.listen(PORT, () => console.log(`You are on the Pirate Crew server on port ${PORT}`));