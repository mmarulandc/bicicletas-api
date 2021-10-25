const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bicicletasRouter = require("./routes/bicicletas")
const db = require("./db");

// const auth = require("./routes/auth");
// const post = require("./routes/posts");
const app = express();

//septup middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/bicicletas/bicicleta", bicicletasRouter);
app.use("/bicicletas/heathCheck", (req, res, next) => {
  return res.status(200).json({message:"ok, woking"});
})
// app.use("/api", post);

app.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});

module.exports = app;