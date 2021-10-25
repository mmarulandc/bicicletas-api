const express = require("express");
const router = express.Router();
// const { getBicicletas, insertBicicletas, updateBicicleta, deleteBicicleta, getBicicletaById } = require("../controllers/bicicletas")
const { login } = require("../controllers/login")

router.post("/", login);
// router.get("/:id", getBicicletaById);
// router.post("/", insertBicicletas);
// router.put("/:id", updateBicicleta);
// router.delete("/:id", deleteBicicleta);

module.exports = router;