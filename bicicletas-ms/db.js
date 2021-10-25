const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongodb:27017/redbicicletas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;