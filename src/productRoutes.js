const express = require("express");
const ProductosCtrl = require("./controllers/ProductosCtrl");

const router = express.Router();

// Ahora en la ruta ingresar le paso los datos porque los voy a usar 
// la primera vez que cargue
router.get("/ingresar", async (req, res) => {
    const data = {};
    data.productos = await ProductosCtrl.getProductos();
    data.hayProductos = data.productos.length > 0;
    res.render("ingresar", data);
});

router.get("/vista", async (req, res) => {
    const data = {};
    data.productos = await ProductosCtrl.getProductos();
    data.hayProductos = data.productos.length > 0;
    res.render("vista", data);
});

module.exports = router;