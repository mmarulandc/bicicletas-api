const bicicletaScheme = require("../models/bicicletas")

module.exports.getBicicletas = async (req, res) => {
  try {
    const bicicletas = await bicicletaScheme.find();
    return res.json({
      bicicletas: bicicletas
    });
  }catch (err) {
    console.log("Error finding  bicycles: " + err.message);
    return res.status(500).json({ error: err})
  }
}

module.exports.insertBicicletas = async (req, res) => {
  const { modelo, color, latitud, longitud } = req.body;
  const bicicleta = new bicicletaScheme({
    modelo: modelo,
    color: color,
    latitud: latitud,
    longitud: longitud,
  })
  
  try {
    await bicicletaScheme.create(bicicleta)
  } catch (err) {
    console.log("Error creating a bicycle: " + err.message);
    return res.status(500).json({message: err.message});
  }
  return res.status(200).json({message: "created now"});
}

module.exports.updateBicicleta = async (req, res) => {
  const bicicletaId = req.params.id;
  const { modelo, color, latitud, longitud } = req.body;
  const bicicleta = {
    modelo: modelo,
    color: color,
    latitud: latitud,
    longitud: longitud,
  };
  
  try {
    await bicicletaScheme.findByIdAndUpdate(bicicletaId, bicicleta)
  } catch (err) {
    console.log("Error updating a bicycle: " + err.message);
    return res.status(500).json({message: err.message});
  }
  return res.status(200).json({message: "ok"});
}

module.exports.deleteBicicleta = async (req, res) => {
  const bicicletaId = req.params.id;
  
  try {
    await bicicletaScheme.findByIdAndDelete(bicicletaId)
  } catch (err) {
    console.log("Error deleting a bicycle: " + err.message);
    return res.status(500).json({message: err.message});
  }
  return res.status(200).json({message: "its deleted now"});
}

module.exports.getBicicletaById = async (req, res) => {
  const bicicletaId = req.params.id;
  try {
    const bicicleta = await bicicletaScheme.findById(bicicletaId);
    return res.json({
      bicicleta: bicicleta
    });
  }catch (err) {
    console.log("Error finding  bicycles: " + err.message);
    return res.status(500).json({ error: err})
  }
}