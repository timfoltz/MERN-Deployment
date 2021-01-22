const { builtinModules } = require("module");
const pirates = require("../controllers/pirates");

module.exports = (app) => {

    app.get("/pirates",pirates.findAll)
    app.post("/pirates",pirates.create)
    app.get("/pirates/:id",pirates.findOne)
    app.delete("/pirates/:id",pirates.delete)
    app.put("/pirates/:id",pirates.update)

}