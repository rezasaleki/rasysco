const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
// `mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`
(async () => {
    await db.mongoose
    .connect(`mongodb://${config.host}:${config.port}/${config.database}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch(err => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });
})();

db.Good = require("./Good")(mongoose);
db.Busines = require("./Busines")(mongoose);

exports.db = db;
