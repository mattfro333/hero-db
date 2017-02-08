// Connect Massive
var massive = require("massive");
var connectionString = "postgres://postgres:Milkyway6933@localhost/hero";
var massiveInstance = massive.connectSync({connectionString : connectionString})
// Make DB available to export
module.exports = massiveInstance;
