const express = require("express");
const router = express.Router();
const {checkAuthenticated} = require("../middlewares/check-auth");
const { getBicicletas, insertBicicletas, updateBicicleta, deleteBicicleta, getBicicletaById } = require("../controllers/bicicletas")


router.get("/", checkAuthenticated, getBicicletas);
router.get("/:id", checkAuthenticated, getBicicletaById);
router.post("/", checkAuthenticated, insertBicicletas);
router.put("/:id", checkAuthenticated,  updateBicicleta);
router.delete("/:id", checkAuthenticated, deleteBicicleta);

module.exports = router;